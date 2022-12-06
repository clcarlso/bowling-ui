import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RollButtonComponent } from './roll-button/roll-button.component';
import { ScoreButtonComponent } from './score-button/score-button.component';
import { ScoreboardFrameCardComponent } from './scoreboard-frame-card/scoreboard-frame-card.component';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { MainMenuPageComponent } from './main-menu-page/main-menu-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { GameOptionPageComponent } from './game-option-page/game-option-page.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ScoreboardComponent,
    RollButtonComponent,
    ScoreButtonComponent,
    ScoreboardFrameCardComponent,
    ResetButtonComponent,
    MainMenuPageComponent,
    GamePageComponent,
    NotFoundPageComponent,
    MenuButtonComponent,
    LeaderboardPageComponent,
    GameOptionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ScoreboardFrameCardComponent]
})
export class AppModule { }
