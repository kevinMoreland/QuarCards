import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-results-popup',
  templateUrl: './results-popup.component.html',
  styleUrls: ['./results-popup.component.css']
})
export class ResultsPopupComponent implements OnInit {

  @Input() popupIsOpen : boolean;
  @Input() voteResults : Array<any>;

  @Output() closePopup = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
