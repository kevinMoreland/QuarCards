import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-block',
  templateUrl: './player-block.component.html',
  styleUrls: ['./player-block.component.css']
})
export class PlayerBlockComponent implements OnInit {
  @Input() name: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
