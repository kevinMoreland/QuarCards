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
  modeNames : String[] = ["my-turn", "voting"];
  routingSubscription: Subscription;
  chatSubscription: Subscription;
  chatMessages: string[] = [];

  constructor( private socketService: SocketService,
    private router: Router,
    private cardService: CardService) {
      this.chatSubscription = this.socketService.receiveChatMessage().subscribe( (msg) => {
        console.log(this.chatMessages);
        this.chatMessages.push(msg);
      });
    }

  ngOnInit(): void {
    this.browserRefresh = browserRefresh;
    if (this.browserRefresh) {
      this.router.navigate(['/']);
    }
    this.modeNum = 0;
    this.currMode = this.modeNames[this.modeNum];

    this.routingSubscription = this.router.events.subscribe( event => {
      if (event instanceof NavigationStart ) {
        this.socketService.disconnectSocket();
      }
    });
  }

  changeState() : void {
    this.modeNum = (this.modeNum + 1)%this.modeNames.length;
    this.currMode = this.modeNames[this.modeNum];
  }

  onSendChat(): void {
    this.socketService.sendChatMessage();
  }

  ngOnDestroy(): void {
    if (this.routingSubscription) {
      this.routingSubscription.unsubscribe();
    }
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

}
