import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() hasVoted : boolean;
  @Output() voted = new EventEmitter();

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  
  vote() : void {
    if(this.currMode == cardMode.voting && !this.hasVoted) {
      alert("voting for " + this.player.name + ", with id " + this.player.Id);
      this.socketService.submitVote(this.player);
      this.voted.emit(null);
    }
    else {
      alert("not my turn to vote ...");
    }
  }
}
