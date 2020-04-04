import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameViewComponent } from './game-view/game-view.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayingCardComponent } from './playing-card/playing-card.component';
import { PlayerBlockComponent } from './player-block/player-block.component';
import { MyCardsComponent } from './my-cards/my-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './chat/chat.component'; 

const appRoutes: Routes = [
  { path: 'game', component: GameViewComponent },
  { path: 'main', component: MainMenuComponent },
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GameViewComponent,
    MainMenuComponent,
    PageNotFoundComponent,
    PlayingCardComponent,
    PlayerBlockComponent,
    MyCardsComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only, navigation events are logged
    )
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
