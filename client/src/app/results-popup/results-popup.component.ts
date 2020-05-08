import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-results-popup',
  templateUrl: './results-popup.component.html',
  styleUrls: ['./results-popup.component.css']
})
export class ResultsPopupComponent implements OnInit {
  @ViewChild("resultsText", {read: ElementRef}) resultsText: ElementRef;

  popupIsOpen : boolean;
  voteWinner : any;
  cardToSend : string;
  tiedWinners : Array<any>;
  isAtie : boolean;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.isAtie = false;
    this.tiedWinners = [];
    this.popupIsOpen = false;
  }

  //TODO handle ties
  parseVoteResults(voteResults: Array<any>, winner : any) : string {
    var parsedResults = "";
    var reachedArrElements = [];

    //sort the names so results display consistantely 
    voteResults.sort((a, b) => (a.name > b.name) ? 1 : -1)

    voteResults.forEach(function (player) {
      if(!reachedArrElements.includes(player.name)){
        var numVotes = voteResults.filter((value) => value.name == player.name).length;
        parsedResults += (player.name + " got " + numVotes + " votes! \n");

        reachedArrElements.push(player.name);
      }
    });
    
    
    parsedResults += ("\n" + winner.name + " wins the card.");
    parsedResults += ("\n\nReveal the results to the other players!");
    return parsedResults;
  }
  open(voteResults: Array<any>, winners: Array<any>, cardText: string) : void {
    this.popupIsOpen = true;
    this.cardToSend = cardText;

    if(winners.length == 1) {
      this.resultsText.nativeElement.textContent = this.parseVoteResults(voteResults, winners[0]);
      this.voteWinner = winners[0];
      this.isAtie = false;
    }
    else {
      this.tiedWinners = winners;
      this.isAtie = true;
      this.resultsText.nativeElement.textContent = "Looks like we got ouselves a good old Mexican standoff (there was a tie). Break the tie!";
    }
  }

  breakTie(selectedPlayer) : void {
    this.voteWinner = selectedPlayer;
    this.close();
  }

  close() : void {
    this.popupIsOpen = false;
    this.socketService.sendVoteResultsToOtherPlayers(this.voteWinner, this.cardToSend);
    this.socketService.giveUpTurn();
  }
}
