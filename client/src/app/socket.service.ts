import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any = null;
  connectedRoom: string = '';

  constructor() { }

  setUpSocket() {
    if (this.socket) {
      return;
    }
    var hostname = 'http://localhost:3000';
    //'https://strawberry-sundae-17314.herokuapp.com'
    //'http://localhost:3000'

    this.socket = io(hostname);

    this.socket.on('connected', function(code) {
      this.connectedRoom = code;
      console.log('connected room:', this.connectedRoom);
    });
    //this.socket.emit('hello from client');
  }

  disconnectSocket() {
    if (this.socket) {
      this.socket.disconnect();
    }
    this.socket = null;
    this.connectedRoom = '';
  }

  joinNewRoom() {
    if (this.connectedRoom !== '') {
      console.log("Cannot connect to new lobby while in another lobby");
    }
    else {
      this.socket.emit('newLobby');
    }
  }

  joinExistingRoom(desiredRoom) {
    if (this.connectedRoom !== '') {
      console.log("Cannot connect to new lobby while in another lobby");
    }
    else {
      this.socket.emit('joinLobby', desiredRoom);
    }
  }
}
