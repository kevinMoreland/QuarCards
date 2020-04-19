import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LobbyService } from '../lobby.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  lobbyCode: string;
  isConnectedSubscription: Subscription;
  showNameField: boolean;
  joiningGame: boolean;
  invalidRoom: boolean;
  name: String;

  constructor( private socketService: SocketService,
    private router: Router,
    private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.showNameField = false;
    this.joiningGame = false;
    this.invalidRoom = false;
    this.socketService.setUpSocket();
  }

  onStartGame() {
    this.invalidRoom = false;
    this.showNameField = true;
  }

  onJoinGame() {
    console.log(this.lobbyCode);
    this.lobbyService.checkRoom(this.lobbyCode).subscribe(res => {
      console.log(res);
      console.log("here");
      this.joiningGame = true;
      this.invalidRoom = false;
      this.showNameField = true;
    }, err => {
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        if (err.status == 401) {
            this.invalidRoom = true;
        }
      }
    });
  }

  onEnterName() {
    this.onConnectGoToGame();
    if (this.joiningGame) {
      this.socketService.joinExistingRoom(this.lobbyCode, this.name);
    }
    else {
      this.socketService.joinNewRoom(this.name);
    }
  }

  onConnectGoToGame(){
    if(!this.isConnectedSubscription){
      this.isConnectedSubscription = this.socketService.getIsConnected().subscribe( () => {
        this.router.navigate(['/game']);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.isConnectedSubscription) {
      this.isConnectedSubscription.unsubscribe();
    }
  }

}
