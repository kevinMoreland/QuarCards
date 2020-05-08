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

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
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
    if(winners.length == 1) {
      this.resultsText.nativeElement.textContent = this.parseVoteResults(voteResults, winners[0]);
      this.socketService.sendVoteResultsToOtherPlayers(winners[0], cardText);
    }
    else {
      alert("there was a tie");
    }
    this.socketService.sendVoteResultsToOtherPlayers(winners[0], cardText);
  }
  close() : void {
    this.popupIsOpen = false;
    this.socketService.giveUpTurn();
  }
}
