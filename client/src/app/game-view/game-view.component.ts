import { Component, OnInit, ElementRef } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { Output } from '@angular/core';

import { browserRefresh } from '../app.component';
enum cardMode {myTurn, voting, waiting};

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

    //have this here for now to check that on initialization, we know the turn of this player
    this.updateCardMode(this.socketService.isTurn);

    this.isTurnSubscription = this.socketService.getIsTurn().subscribe( (msg) => {
      this.socketService.isTurn = msg;
      this.updateCardMode(msg);
    });
  }
  
  updateCardMode(isTurn : boolean) : void {
    alert("is turn? " + isTurn);
    if(isTurn){
      //my-turn
      this.currMode = cardMode.myTurn;
    }
    else{
      //voting
      this.currMode = cardMode.voting;
    }
  }


  giveUpTurn() : void {
    this.socketService.giveUpTurn();
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
