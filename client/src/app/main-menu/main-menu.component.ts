import { Component, OnInit, ViewChild, ɵSWITCH_RENDERER2_FACTORY__POST_R3__ } from '@angular/core';
import { SocketService } from '../socket.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LobbyService } from '../lobby.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @ViewChild(AlertPopupComponent) alertPopup: AlertPopupComponent;

  lobbyCode: string;
  isConnectedSubscription: Subscription;
  showNameField: boolean;
  emptyName: boolean = false;
  invalidName: boolean = false;
  joiningGame: boolean;
  invalidRoom: boolean;
  name: string = '';

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

  onGetGameInfo() {
    var gameExplanation : string = "Quarantine Cards is a virtual card game created by 2 Cal Poly studs in the hopes of entertaining and connecting our fellow college students. Here's how it works:";
    var step1 : string = "1. Get all your friends in a game using your game's room code";
    var step2 : string = "2. When it's your turn, you will have the option to pick 1 of 3 cards";
    var step3 : string = "3. Your friends will vote for who they think the card best matches with";
    var step4 : string = "4. If there is a tie, you will be in charge of breaking it!";
    var step5 : string = "5. Play as many rounds as you like"
    var step5 : string = "5. Tell more people about our game :->"

    var newLine : string = "\n";
    this.alertPopup.open("How To Play", gameExplanation + "\n\n" + step1 + "\n" + step2 + "\n" + step3 + "\n" +step4 + "\n" + step5);
  }

  onJoinGame() {
    console.log(this.lobbyCode);
    this.lobbyService.checkRoom(this.lobbyCode).subscribe(res => {
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
    // check empty names
    console.log(this.name);
    if (this.name === '') {
      this.emptyName = true;
      this.invalidName = false;
      return;
    }
    else {
      this.emptyName = false;
    }
    console.log('before');
    this.lobbyService.checkName(this.lobbyCode, this.name).subscribe( res => {
      console.log('yis');
      this.onConnectGoToGame();
      if (this.joiningGame) {
        this.socketService.joinExistingRoom(this.lobbyCode, this.name);
      }
      else {
        this.socketService.joinNewRoom(this.name);
      }
    }, err => {
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        if (err.status == 401) {
          this.invalidName = true;
        }
      }
    })
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
