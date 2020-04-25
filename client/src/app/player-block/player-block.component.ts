import { Component, OnInit, Input } from '@angular/core';
import { SocketService } from '../socket.service';
import { cardMode } from '../../entity/data-structures/card-modes';

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrls: ['./player-block.component.css']
})
export class PlayerBlockComponent implements OnInit {
  @Input() name: string;
  @Input() currMode: cardMode;
  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
  }

  vote() : void {
    if(this.currMode == cardMode.voting) {
      this.socketService.submitVote(name);
    }
    else {
      alert("not my turn to vote ...");
    }
  }
}
