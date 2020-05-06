import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { SocketService } from '../socket.service';
import { cardMode } from '../../entity/data-structures/card-modes';

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrls: ['./player-block.component.css']
})
export class PlayerBlockComponent implements OnInit {
  @Input() player: any;
  @Input() currMode: cardMode;
  @Input() cardVotingOn: string;
  @Output() voted = new EventEmitter();
  @ViewChild("voteButton", {read: ElementRef}) voteButton: ElementRef;

  //used in the html file to determine if button is grayed out (disabled) or colored (enabled)
  votingEnabled: boolean;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if(this.currMode == cardMode.voting) {
      setTimeout(() => {
        this.votingEnabled = true;
      });
      
    }
    else {
      setTimeout(() => {
        this.votingEnabled = false;
      });
    }
  }
  
  ngOnChanges(changes : SimpleChanges): void{
    if(changes.currMode && this.voteButton != null) {
      if(this.currMode == cardMode.voting) {
        this.votingEnabled = true;
      }
      else {
        this.votingEnabled = false;
      }
    }
  }

  vote() : void {
    if(this.votingEnabled) {
      this.socketService.submitVote(this.player, this.cardVotingOn);

      //after emitting the vote event, gameview will change currMode to waiting, and disable voting buttons
      this.voted.emit(true);
    }
  }
}
