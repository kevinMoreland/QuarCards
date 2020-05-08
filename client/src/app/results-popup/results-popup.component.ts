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
  parseVoteResults(voteResults: Array<any>, winner : any, isATie: boolean) : string {
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
    if(isATie) {
      parsedResults += "\n(we broke the tie by picking who we like the best)";
    }
    parsedResults += ("\n\nReveal the results to the other players!");
    return parsedResults;
  }
  open(voteResults: Array<any>, winner: string, isATie: boolean) : void {
    this.popupIsOpen = true;
    this.resultsText.nativeElement.textContent = this.parseVoteResults(voteResults, winner, isATie);

  }
  close() : void {
    this.popupIsOpen = false;
    this.socketService.giveUpTurn();
  }
}
