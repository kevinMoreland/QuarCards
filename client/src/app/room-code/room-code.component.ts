import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-code',
  templateUrl: './room-code.component.html',
  styleUrls: ['./room-code.component.css']
})
export class RoomCodeComponent implements OnInit {

  @Input() lobbyCode: string;
  constructor() { }

  ngOnInit(): void {
  }

}
