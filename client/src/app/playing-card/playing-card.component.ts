import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input, ViewChild, ElementRef } from '@angular/core';
import { CardService } from '../card.service';
import { SocketService } from '../socket.service';
import Card from 'src/entity/Card';

enum cardMode {myTurn, voting, waiting};

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})

export class PlayingCardComponent implements OnInit {


  @Input() currMode : cardMode;
  @ViewChild("cardBackText", {read: ElementRef}) cardText: ElementRef;
  @ViewChild("cardFlipper", {read: ElementRef}) card: ElementRef;
  @ViewChild("choiceButton", {read: ElementRef}) choiceButton: ElementRef;

  cardFlipTime : number = 600;
  testCard : Card;

  constructor(private cardService: CardService,
              private socketService: SocketService) { }

  ngOnInit(): void {
    //TODO randomly select a card
    this.cardService.getCard(0).subscribe(card => 
      this.testCard = card);
  }

  //when the mode changes (players turn to pick card or vote  ), notify the card so it can transition to the new mode
  ngOnChanges(changes : SimpleChanges): void{
    if(changes.currMode) {
      if(this.card != null) {
        this.transitionToNewMode();
      }
    }
  }

  //modify the text and flip the cards as necessary to enter the new mode
  transitionToNewMode() : void {
    //check null since initially on load, ngOnChanges detects a change in currMode when the card is still undefined
    if(this.card != null) {
      switch(this.currMode){
        case cardMode.voting: {
          this.transitionCardToFace("front");
          
          this.cardText.nativeElement.textContent = "vote above !";
          break;
        }
        case cardMode.waiting: {
          this.transitionCardToFace("front");
          
          this.cardText.nativeElement.textContent = "waiting ...";
          break;
        }
        case cardMode.myTurn: {
          this.transitionCardToFace("back");
          
          //TODO: randomly select a card
          this.cardText.nativeElement.textContent = this.testCard.card_text;
          break;
        }
      }

      //disable or enable the button to choose a card
      this.disableCardChooseButton();
    }
  }

  disableCardChooseButton()
  {
    let choiceButtonIsDisabled : Boolean = this.choiceButton.nativeElement.classList.contains('disabled');
    if((this.currMode == cardMode.voting && !choiceButtonIsDisabled) ||
       (this.currMode == cardMode.myTurn && choiceButtonIsDisabled) ||
       (this.currMode == cardMode.waiting && !choiceButtonIsDisabled))
    {
      this.choiceButton.nativeElement.classList.toggle('disabled');
    }
  }

  //flip a card over to the desired face side
  transitionCardToFace(face : String) : void {
    let cardIsOnFace : Boolean = this.card.nativeElement.classList.contains('flip');
    
    //switch statement on which card face we would like to end up at after some fancy flipping
    switch(face){
      case("front"): {
        if(cardIsOnFace) {
          setTimeout(() => this.card.nativeElement.classList.toggle('flip'), this.cardFlipTime);
          this.card.nativeElement.classList.toggle('flip');
        }
        else { this.card.nativeElement.classList.toggle('flip'); }
        break;
      }
      case("back"): {
        if(!cardIsOnFace) {
          setTimeout(() => this.card.nativeElement.classList.toggle('flip'), this.cardFlipTime);
          this.card.nativeElement.classList.toggle('flip');
        }
        else { this.card.nativeElement.classList.toggle('flip'); }
        break;
      }
    }
  }

  onCardClick(card : HTMLElement) : void{
    if(this.currMode == cardMode.myTurn)
    {
      card.classList.toggle('flip');
    }
  }

  onCardPicked() : void{
    console.log("card picked: " + this.cardText.nativeElement.textContent);

    this.socketService.giveUpTurn();
  }
}
