import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any = null;
  connectedRoom: string = '';
  isTurnOnStart: boolean = null;
  allOtherPlayersOnStart: Array<any> = [];

  constructor() { }

  //get list of all players excluding this current one
  getAllOtherPlayersList(allPlayers: Array<any>): Array<any>{
    console.log("all players: " + allPlayers);
    var output: Array<any> = [];
    allPlayers.forEach((player) =>{
      if(player.Id != this.socket.id){
        output.push(player);
      }
    });
    console.log("all other players: " + output);
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
        this.isTurnOnStart = turn;
        this.allOtherPlayersOnStart = this.getAllOtherPlayersList(playerList);
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
    this.isTurnOnStart = null;
    this.allOtherPlayersOnStart = null;
  }

  joinNewRoom(name: String): void {
    if (this.connectedRoom !== '') {
      console.log("Cannot connect to new lobby while in another lobby");
    }
    else {
      this.socket.emit('newLobby', name);
    }    
  }

  joinExistingRoom(desiredRoom: String, name: String) {
    if (this.connectedRoom !== '') {
      console.log("Cannot connect to new lobby while in another lobby");
    }
    else {
      this.socket.emit('joinLobby', desiredRoom, name);
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
      this.socket.on('serverSendIsTurn', (isTurn) => {
        observer.next(isTurn);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  //signal to the server that a card was picked
  pickCard(cardText : string) : void {
    this.socket.emit('clientPickedCard', this.connectedRoom, cardText);
  }

  //wait for the card picked by player with the turn
  getPickedCard() : Observable<string>{
    let observable = new Observable<string>( observer => {
      this.socket.on('serverSendCardPicked', (cardText) => {
        observer.next(cardText);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  //wait for the voting results for the round
  getVoteResults() : Observable<Array<any>>{
    let observable = new Observable<Array<any>>( observer => {
      this.socket.on('serverSendVoteResults', (results) => {
        observer.next(results);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  submitVote(playerId : String) : void{
    console.log("in socket service, got player as " + playerId);
    this.socket.emit('clientSendVote', this.connectedRoom, playerId);
  }

  //get the list of all players excluding current player
  getOtherPlayerList() : Observable<Array<any>>{
    let observable = new Observable<Array<any>>( observer => {
      this.socket.on('serverUpdatePlayerList', (msg) => {
        var output: Array<any> = this.getAllOtherPlayersList(msg);
        observer.next(output);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

}
