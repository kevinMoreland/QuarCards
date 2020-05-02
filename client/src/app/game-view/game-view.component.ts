import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Output } from '@angular/core';

import { browserRefresh } from '../app.component';
import { cardMode } from '../../entity/data-structures/card-modes';
import { ResultsPopupComponent } from '../results-popup/results-popup.component';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  browserRefresh: boolean;
  @Output() currMode : cardMode;
  @ViewChild(ResultsPopupComponent) resultsPopup: ResultsPopupComponent;
  @ViewChild(AlertPopupComponent) alertPopup: AlertPopupComponent;

  isTurn : boolean;
  firstPlayer : boolean;
  @Output() votingPhrase : string;

  routingSubscription: Subscription;
  //updates player when turns are tranferred in the game
  isTurnSubscription: Subscription;
  //updates the list of other players currently in the game
  playerListSubscription: Subscription;
  //signals to the player when a card is picked to vote on
  cardPickedSubscription: Subscription;
  //signals to the player when vote results are available after a round of voting
  voteResultsSubscription: Subscription;
  //signals to player when a round is cancelled because someone who was collecting votes leaves
  roundIsCancelledSubscription: Subscription;

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
    //initialize list of players
    this.playerList = this.socketService.allOtherPlayersOnStart;
    this.firstPlayer = this.isTurn && this.playerList.length == 0;

    this.initCardMode();
    this.initTurnSubscription();
    this.initPlayerListSubscription();
    this.initVoteResultsSubscription();
    this.initRoundIsCancelledSubscription();
  }

  ngAfterViewInit(): void {
    this.initCardPickedSubscription();
    //welcome message
    //TODO this throws an error, fix it
    if(this.firstPlayer) {
      //the "setTimeout" avoids the ExpressionChangedAfterChecked error I was getting
      setTimeout(() => {
        this.alertPopup.open("You look lonely...", "Send the game code at the top of the screen to your friends so they can join you!");
      });
    }
    else if (!this.isTurn){
      setTimeout(() => {
        this.alertPopup.open("Welcome Aboard", "Wait for your friend to pick a card, then vote for whoever you think the card best fits!");
      });
    }
  }
  
  initVoteResultsSubscription() : void {
    this.voteResultsSubscription = this.socketService.getVoteResults().subscribe((resultsArray) => {
      if(this.isTurn) {
        this.resultsPopup.open(resultsArray);
      }
      else {
        this.alertPopup.open("Voting done!", "Wait for this round's card reader to reveal the results with the group");
      }
    });
  }
  initRoundIsCancelledSubscription() : void {
    this.roundIsCancelledSubscription = this.socketService.getRoundIsCancelled().subscribe((isNewHost) => {
      if(!isNewHost){
        this.currMode = cardMode.waiting;
      }
      
      this.alertPopup.open("Someone Left", "The numb nut who was supposed to collect the vote results left the game. Restarting the previous round.");
    });
  }
  initCardPickedSubscription() : void {
    this.cardPickedSubscription = this.socketService.getPickedCard().subscribe((cardText) => {
      
      var roomEmpty = this.playerList.length == 0;
      if(!roomEmpty) {
        //wait for the other players to vote
        if(this.currMode == cardMode.myTurn) { 
          this.currMode = cardMode.waiting;
        }
        //allow voters to vote since a card was picked, and display the card
        else { 
          this.currMode = cardMode.voting;
          this.votingPhrase = cardText;
        }
      }
      else {
        this.alertPopup.open("Empty room...", "You can't pick a card if there's no one to vote");
      }
    });
  }
  initPlayerListSubscription() : void {
    this.playerListSubscription = this.socketService.getOtherPlayerList().subscribe( (plist) => {
      this.playerList = plist;
      if(plist.length == 0) {
        this.alertPopup.open("Empty room...", "Where did all your friends go?");
        this.currMode = cardMode.myTurn;
      }
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
  
  onVoted(): void {
    this.currMode = cardMode.waiting;
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
    if(this.roundIsCancelledSubscription) {
      this.roundIsCancelledSubscription.unsubscribe();
    }
  }

}
