import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';
import { cardMode } from '../../entity/data-structures/card-modes';

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrls: ['./player-block.component.css']
})
export class PlayerBlockComponent implements OnInit {
  @Input() name: String;
  @Input() currMode: cardMode;
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  vote() : void {
    if(this.currMode == cardMode.voting) {
      alert("voting for " + this.name);
      this.socketService.submitVote(this.name);
    }
    else {
      alert("not my turn to vote ...");
    }
  }
}
