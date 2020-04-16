import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  lobbyCode: string;
  isConnectedSubscription: Subscription;

  constructor( private socketService: SocketService,
    private router: Router ) { }

  ngOnInit(): void {
    this.socketService.setUpSocket();
  }

  onStartGame() {
    // set up listener for connecting to lobby
    this.onConnectGoToGame();

    // send event to server
    this.socketService.joinNewRoom();
  }

  onJoinGame() {
    // set up listener for connecting to lobby
    this.onConnectGoToGame();

    // send event to server
    this.socketService.joinExistingRoom(this.lobbyCode);
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
