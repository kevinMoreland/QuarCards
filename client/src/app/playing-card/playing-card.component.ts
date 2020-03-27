import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onGameCardClick(el : HTMLElement) {

    //only flip the card one way.
    if(!el.classList.contains('is-flipped'))
    {
      el.classList.toggle('is-flipped');
    }
    
  }
}
