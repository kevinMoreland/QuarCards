import { Component, OnInit, ElementRef } from '@angular/core';
import { SocketService } from '../socket.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { CardService } from '../card.service';
import { Output } from '@angular/core';

import { browserRefresh } from '../app.component';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.css']
})
export class GameViewComponent implements OnInit {
  browserRefresh: boolean;
  @Output() currMode : String;
  modeNum : number = 0;
  modeNames : String[] = ["my-turn", "voting", "waiting"];

  routingSubscription: Subscription;
  isTurnSubscription: Subscription;

  constructor( private socketService: SocketService,
    private router: Router,
    private cardService: CardService) {
      
    }

  ngOnInit(): void {
    console.log("init game view");
    this.browserRefresh = browserRefresh;
    if (this.browserRefresh) {
      this.router.navigate(['/']);
    }

    this.routingSubscription = this.router.events.subscribe( event => {
      if (event instanceof NavigationStart ) {
        this.socketService.disconnectSocket();
      }
    });

    this.isTurnSubscription = this.socketService.getIsTurn().subscribe( (msg) => {
      this.socketService.isTurn = msg;
      if(msg == true){
        this.currMode = this.modeNames[0];
      }
      else{
        this.currMode = this.modeNames[1];
      }
    });
  }
  
  printIsTurn() : void {
    alert("is turn? " + this.socketService.isTurn);
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
