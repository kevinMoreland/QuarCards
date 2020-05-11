import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import Card from 'src/entity/Card';

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
    //var hostname = 'http://localhost:3000';
    //var hostname = 'https://strawberry-sundae-17314.herokuapp.com';
    //var hostname = 'http://localhost:5000';
    var hostname = 'http://www.qcards.us';

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

  //a round is cancelled if it is someone's turn to pick a card and collect votes, but they disconnect
  getRoundIsCancelled() : Observable<boolean> {
    let observable = new Observable<boolean>( observer => {
      this.socket.on('roundCancelled', (idNextRoundHost) => {
        var isNewHost : boolean;
        isNewHost = false;
        if(this.socket.id == idNextRoundHost){
          isNewHost = true;
        }
        observer.next(isNewHost);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  //signal to the server that a card was picked
  pickCard(card : Card) : void {
    this.socket.emit('clientPickedCard', this.connectedRoom, card);
  }

  //wait for the card picked by player with the turn
  getPickedCard() : Observable<string>{
    let observable = new Observable<string>( observer => {
      this.socket.on('serverSendCardPicked', (cardObject) => {
        if (cardObject) {
          observer.next(cardObject.card_text);
        }
        else {
          observer.next(null);
        }
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
      this.socket.on('serverSendVoteResults', (results, winners, cardVotingOn) => {

        observer.next([results, winners, cardVotingOn]);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  getMyCards() : Observable<Array<any>>{
    let observable = new Observable<Array<any>>( observer => {
      this.socket.on('serverSendUpdatedCards', (cards) => {

        observer.next(cards);
      });
      return () => {
        this.disconnectSocket();
      };
    });

    return observable;
  }

  revealVoteResults(results : Array<any>) : void {
    this.socket.emit('revealVoteResults', this.connectedRoom, results);
  }

  submitVote(playerVotedFor, cardVotingOn : String) : void{
    this.socket.emit('clientSendVote', this.connectedRoom, playerVotedFor, cardVotingOn, this.socket.id);
  }

  sendVoteResultsToOtherPlayers(voteWinner, cardVotingOn){
    this.socket.emit('clientEndingTurn', this.connectedRoom, voteWinner, cardVotingOn);
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
