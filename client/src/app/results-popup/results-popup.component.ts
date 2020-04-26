import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-results-popup',
  templateUrl: './results-popup.component.html',
  styleUrls: ['./results-popup.component.css']
})
export class ResultsPopupComponent implements OnInit {

  popupIsOpen : boolean;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.popupIsOpen = false;
  }

  open(voteResults: Array<any>) : void {
    this.popupIsOpen = true;
  }
  close() : void {
    this.popupIsOpen = false;
    this.socketService.giveUpTurn();
  }
}
