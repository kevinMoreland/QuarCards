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
  parseVoteResults(voteResults: Array<any>) : string {
    var parsedResults = "";
    var reachedArrElements = [];
    var playerWithMaxVotes = "";
    var maxVotes = 0;

    //sort the names so results display consistantely 
    voteResults.sort((a, b) => (a.name > b.name) ? 1 : -1)

    voteResults.forEach(function (player) {
      if(!reachedArrElements.includes(player.name)){
        var numVotes = voteResults.filter((value) => value.name == player.name).length;
        parsedResults += (player.name + " has " + numVotes + " votes! \n");

        if(numVotes > maxVotes) {
          maxVotes = numVotes;
          playerWithMaxVotes = player.name;
        }

        reachedArrElements.push(player.name);
      }
    });

    parsedResults += ("\n" + playerWithMaxVotes + " wins the card.\nReveal the results to the other players!");
    return parsedResults;
  }
  open(voteResults: Array<any>) : void {
    this.popupIsOpen = true;
    this.resultsText.nativeElement.textContent = this.parseVoteResults(voteResults);

  }
  close() : void {
    this.popupIsOpen = false;
    this.socketService.giveUpTurn();
  }
}
