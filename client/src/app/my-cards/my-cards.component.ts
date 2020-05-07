import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from '../socket.service';


@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {
  myCardsSubscription: Subscription;
  myCards : Array<string>;
  constructor(private socketService: SocketService) { }

  ngOnInit(): void { 
    this.initMyCardsSubscription();
  }

  initMyCardsSubscription() : void {
    this.myCardsSubscription = this.socketService.getMyCards().subscribe((cards) => {
      this.myCards = cards;  
    });
  }

  ngOnDestroy(): void {
    if(this.myCardsSubscription) {
      this.myCardsSubscription.unsubscribe();
    }
  }
}
