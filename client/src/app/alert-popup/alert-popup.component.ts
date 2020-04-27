import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.css']
})
export class AlertPopupComponent implements OnInit {
  @ViewChild("alertTitle", {read: ElementRef}) titleText: ElementRef;
  @ViewChild("alertBody", {read: ElementRef}) bodyText: ElementRef;

  popupIsOpen : boolean;

  constructor() { }

  ngOnInit(): void {
  }
  open(alertTitle:string, alertMessage: string) : void {
    this.bodyText.nativeElement.textContent = alertMessage;
    this.titleText.nativeElement.textContent = alertTitle;
    this.popupIsOpen = true;
  }
  close() : void {
    this.popupIsOpen = false;
  }
}
