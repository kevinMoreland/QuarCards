import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent implements OnInit {
  @Input() clickMethod;
  constructor() { }

  ngOnInit(): void {
  }
  onGameCardClick(cardEl : HTMLElement, cardTextEl: HTMLElement) {

    //only flip the card one way.
    if(!cardEl.classList.contains('is-flipped'))
    {
      //get a random card not in the discard pile
      this.clickMethod(cardTextEl);

      //flip card
      cardEl.classList.toggle('is-flipped');
      
    }
    
  }
}
