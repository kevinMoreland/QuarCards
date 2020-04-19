import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any = null;
  connectedRoom: string = '';
  isTurn: boolean = null;
  allOtherPlayers: Array<string> = [];

  constructor() { }

  //get list of all players excluding this current one
  getAllOtherPlayersList(allPlayers: Array<string>): Array<string>{
    var output: Array<string> = [];
    allPlayers.forEach((player) =>{
      if(player != this.socket.id.toString()){
        output.push(player);
      }
    })
    return output;
  }

  setUpSocket() {
    if (this.socket) {
      return;
    }
    var hostname = 'http://localhost:3000';
    //var hostname = 'https://strawberry-sundae-17314.herokuapp.com';
    //var hostname = 'http://localhost:5000';

    this.socket = io(hostname);
  }

  getIsConnected() : Observable<boolean>{

    //this.socket.emit('clientGetIsTurn', this.connectedRoom);
    let observable = new Observable<boolean>( observer => {
      this.socket.on('connected', (code, turn, playerList) => {
        this.connectedRoom = code;
        this.isTurn = turn;
        this.allOtherPlayers = this.getAllOtherPlayersList(playerList);
        console.log("is connected to " + code + ", and is turn? " + turn + ", " + playerList);
        observer.next();
      });
    });

    return observable;
  }

  disconnectSocket() {
    if (this.socket) {
      this.socket.disconnect();
    }
    this.socket = null;
    this.connectedRoom = '';
    this.isTurn = null;
  }

  joinNewRoom(): void {
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

  sendChatMessage(message: string) {
    this.socket.emit('clientSendChat', this.connectedRoom, message);
  }

  receiveChatMessage() {
    let observable = new Observable<string>( observer => {
      this.socket.on('serverSendChat', (msg) => {
        console.log(msg);
        observer.next(msg);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  giveUpTurn(){
    this.socket.emit('clientGivingUpTurn', this.connectedRoom);
  }
  getIsTurn() : Observable<boolean>{
    let observable = new Observable<boolean>( observer => {
      this.socket.on('serverSendIsTurn', (msg) => {
        this.isTurn = msg;
        console.log("is turn? " + msg);
        observer.next(msg);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  getPlayerList() : Observable<Array<string>>{
    let observable = new Observable<Array<string>>( observer => {
      this.socket.on('serverUpdatePlayerList', (msg) => {
        var output: Array<string> = this.getAllOtherPlayersList(msg);
        observer.next(output);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

}
