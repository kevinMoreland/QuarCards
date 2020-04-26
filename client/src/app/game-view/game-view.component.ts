import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Output } from '@angular/core';

import { browserRefresh } from '../app.component';
import { cardMode } from '../../entity/data-structures/card-modes';
import { ResultsPopupComponent } from '../results-popup/results-popup.component';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  browserRefresh: boolean;
  @Output() currMode : cardMode;
  @ViewChild(ResultsPopupComponent) resultsPopup: ResultsPopupComponent;
  
  isTurn : boolean;

  routingSubscription: Subscription;
  isTurnSubscription: Subscription;
  playerListSubscription: Subscription;
  cardPickedSubscription: Subscription;
  voteResultsSubscription: Subscription;

  playerList: Array<any>;

  constructor( private socketService: SocketService,
    private router: Router) {}

  ngOnInit(): void {
    console.log("init game view");
    
    this.browserRefresh = browserRefresh;
    if (this.browserRefresh) {
      this.router.navigate(['/']);
      return;
    }

    this.initRoutingSubscription();
    
    //initialize turn boolean
    this.isTurn = this.socketService.isTurnOnStart;

    this.initCardMode();
    
    //initialize list of players
    this.playerList = this.socketService.allOtherPlayersOnStart;

    this.initTurnSubscription();
    this.initPlayerListSubscription();
    this.initVoteResultsSubscription();
  }

  ngAfterViewInit(): void {
    this.initCardPickedSubscription();
  }
  
  initVoteResultsSubscription() : void {
    this.voteResultsSubscription = this.socketService.getVoteResults().subscribe((resultsArray) => {
      if(this.isTurn) {
        this.resultsPopup.open(resultsArray);
      }
      else {
        //this.setVoteResultsPopup(true, resultsArray);
        alert("voter should wait for closing other box..");
      }
    });
  }

  initCardPickedSubscription() : void {
    this.cardPickedSubscription = this.socketService.getPickedCard().subscribe((cardText) => {
      //wait for the other players to vote
      if(this.currMode == cardMode.myTurn) { 
        this.currMode = cardMode.waiting;
      }
      //allow voters to vote since a card was picked, and display the card
      else { 
        this.currMode = cardMode.voting;
        alert(cardText);
      }
    });
  }
  initPlayerListSubscription() : void {
    this.playerListSubscription = this.socketService.getOtherPlayerList().subscribe( (plist) => {
      this.playerList = plist;
    });
  }

  initTurnSubscription() : void {
    this.isTurnSubscription = this.socketService.getIsTurn().subscribe( (isTurn) => {
      this.isTurn = isTurn;
      if(isTurn) {
        this.currMode = cardMode.myTurn;
      }
      else {
        this.currMode = cardMode.waiting;
      }
      
    });
  }
  initRoutingSubscription() : void {
    this.routingSubscription = this.router.events.subscribe( event => {
      if (event instanceof NavigationStart ) {
        this.socketService.disconnectSocket();
        console.log('here');
      }
    });
  }
  
  initCardMode() : void {
    //initially, get card mode and list of players other than current player
    if(this.socketService.isTurnOnStart) {
      this.currMode = cardMode.myTurn;
    }
    else {
      this.currMode = cardMode.waiting;
    }
  }

  ngOnDestroy(): void {
    if(this.routingSubscription) {
      this.routingSubscription.unsubscribe();
    }
    if(this.isTurnSubscription) {
      this.isTurnSubscription.unsubscribe();
    }
    if(this.playerListSubscription) {
      this.playerListSubscription.unsubscribe();
    }
    if(this.cardPickedSubscription) {
      this.cardPickedSubscription.unsubscribe();
    }
    if(this.voteResultsSubscription) {
      this.voteResultsSubscription.unsubscribe();
    }
  }

}
