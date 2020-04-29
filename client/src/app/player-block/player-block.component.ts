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
  @ViewChild("voteButton", {read: ElementRef}) voteButton: ElementRef;

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
      this.socketService.submitVote(this.player);
    }

    this.votingEnabled = false;
  }
}
