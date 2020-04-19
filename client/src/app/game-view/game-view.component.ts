import { Component, OnInit, ElementRef } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Output } from '@angular/core';

import { browserRefresh } from '../app.component';
import { cardMode } from '../../entity/data-structures/card-modes';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  browserRefresh: boolean;
  @Output() currMode : cardMode;

  cardMode: cardMode = cardMode.myTurn;

  routingSubscription: Subscription;
  isTurnSubscription: Subscription;
  playerListSubscription: Subscription;

  playerList: Array<String>;

  constructor( private socketService: SocketService,
    private router: Router) {
      
    }

  ngOnInit(): void {
    console.log("init game view");
    this.browserRefresh = browserRefresh;
    if (this.browserRefresh) {
      this.router.navigate(['/']);
      return;
    }
    
    this.routingSubscription = this.router.events.subscribe( event => {
      if (event instanceof NavigationStart ) {
        this.socketService.disconnectSocket();
      }
    });

    //initially, get card mode and list of players
    this.updateCardMode(this.socketService.isTurn);
    this.playerList = this.socketService.activePlayerList;
    alert("player list: " + this.playerList);

    this.isTurnSubscription = this.socketService.getIsTurn().subscribe( (msg) => {
      this.socketService.isTurn = msg;
      this.updateCardMode(msg);
    });

    this.playerListSubscription = this.socketService.getPlayerList().subscribe( (msg) => {
      this.playerList = msg;

      alert("player list: " + msg);
    });
  }

  
  updateCardMode(isTurn : boolean) : void {
    if(isTurn){
      this.currMode = cardMode.myTurn;
    }
    else{
      this.currMode = cardMode.voting;
    }
  }

  ngOnDestroy(): void {
    if (this.routingSubscription) {
      this.routingSubscription.unsubscribe();
    }
    if(this.isTurnSubscription) {
      this.isTurnSubscription.unsubscribe();
    }
  }

}
