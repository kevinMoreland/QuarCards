import { Component, OnInit, SimpleChanges, SystemJsNgModuleLoader } from '@angular/core';
import { Input, ViewChild, ElementRef } from '@angular/core';
import { CardService } from '../card.service';
import { SocketService } from '../socket.service';
import Card from 'src/entity/Card';
import { cardMode } from '../../entity/data-structures/card-modes';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})

export class PlayingCardComponent implements OnInit {


  @Input() currMode : cardMode;
  @Input() votingPhraseText : string;
  @Input() numPlayers : number;
  @ViewChild("cardBackText", {read: ElementRef}) cardText: ElementRef;
  @ViewChild("cardFlipper", {read: ElementRef}) card: ElementRef;
  @ViewChild("choiceButton", {read: ElementRef}) choiceButton: ElementRef;
  cardData : Card = new Card(null);

  cardFlipTime : number = 600;
  testCard : Card;
  backendCardSubscription: Subscription;

  constructor(private cardService: CardService,
              private socketService: SocketService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //this is in ngAfterViewInit because the card ElementRef must first be loaded
    if (this.currMode != cardMode.myTurn) {
      console.log('here');
      this.transitionToNewMode();
    }
    else {
      console.log('afterviewinit')
      this.cardService.getRandomCard().subscribe( (cData) => {
        console.log('card stuff');
        this.cardData = cData;
        this.cardText.nativeElement.textContent = cData.card_text;
      });
    }
  }

  //when the mode changes (players turn to pick card or vote  ), notify the card so it can transition to the new mode
  ngOnChanges(changes : SimpleChanges): void{
    if(changes.currMode) {
      this.transitionToNewMode();
    }
  }

  ngOnDestroy() {
    if (this.backendCardSubscription) {
      this.backendCardSubscription.unsubscribe();
    }
  }

  //modify the text and flip the cards as necessary to enter the new mode
  transitionToNewMode() : void {
    console.log('transition');
    if(this.card != null){
      switch(this.currMode){
        case cardMode.voting: {
          this.cardText.nativeElement.textContent = "";
          this.transitionCardToFace("front");
          if(this.votingPhraseText == null) {
            this.cardText.nativeElement.textContent = "vote above !";
          }
          else {
            this.cardText.nativeElement.textContent = this.votingPhraseText;
          }
          break;
        }
        case cardMode.waiting: {
          this.cardText.nativeElement.textContent = "";
          this.transitionCardToFace("front");
          this.cardText.nativeElement.textContent = "waiting ...";
          break;
        }
        case cardMode.myTurn: {
          console.log('my turn');
          this.cardText.nativeElement.textContent = "";
          this.transitionCardToFace("back");
          
          //TODO: randomly select a card
          this.cardService.getRandomCard().subscribe( (cData) => {
            console.log('card stuff');
            this.cardData = cData;
            this.cardText.nativeElement.textContent = cData.card_text;
          });
          this.cardText.nativeElement.textContent = "randomly selected card text";
          break;
        }
      }
      this.disableCardChooseButton();
    }
  }

  //disable the choice button to select a card when it is not a player's turn
  disableCardChooseButton(){
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
    console.log(cardIsOnFace);
    
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
      // NOTE: setTimeout is an asynchronous function, so toggling nativeElement outside of
      // a setTimeout will always execute faster regardless of position in code
      case("back"): {
        if(!cardIsOnFace) {
          console.log('here');
          setTimeout(() => this.card.nativeElement.classList.toggle('flip'), this.cardFlipTime);
          this.card.nativeElement.classList.toggle('flip');
        }
        else { this.card.nativeElement.classList.toggle('flip'); }
        break;
      }
    }
  }

  onCardClick(card : HTMLElement) : void{
    if(this.currMode == cardMode.myTurn){
      card.classList.toggle('flip');
    }
  }

  onCardPicked() : void {
    console.log(this.numPlayers);
    if (this.numPlayers > 0) {
      console.log("card picked: " + this.cardText.nativeElement.textContent);
      this.socketService.pickCard(this.cardData);
    }
    else {
      // The alert popup is in the parent component, and there's no easy way to trigger
      // it from this component. Thus to prevent someone from picking a card when there's only
      // one person in the lobby, we just pass this function null.
      // The null is handled in the backend to not do any meaningful work, and when that
      // gets back to the frontend and parent component through the socket service,
      // it can still trigger the alert popup.
      this.socketService.pickCard(null);
    }
  }

}
