import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  lobbyCode: string;

  constructor( private socketService: SocketService,
    private router: Router ) { }

  ngOnInit(): void {
    this.socketService.setUpSocket();
  }

  onStartGame() {
    this.socketService.joinNewRoom();
    this.router.navigate(['/game']);
  }

  onJoinGame() {
    this.socketService.joinExistingRoom(this.lobbyCode);
    this.router.navigate(['/game']);
  }

}
