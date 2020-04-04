import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chatOpened: boolean = false;
  chatSubscription: Subscription;
  chatMessages: string[] = [];
  message: string;
  

  constructor( private socketService: SocketService ) { }

  ngOnInit(): void {
    console.log(this.socketService.socket.id);

    this.chatSubscription = this.socketService.receiveChatMessage().subscribe( (msg) => {
      console.log(this.chatMessages);
      this.chatMessages.push(msg);
    });
  }

  onSendChat(): void {
    this.socketService.sendChatMessage(this.message);
    this.message = '';
  }

  onToggleChat(state: boolean) {
    this.chatOpened = state;
  }

  ngOnDestroy(): void {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();
    }
  }

}
