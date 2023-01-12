import { BowlingGameComponent } from './bowling-game/bowling-game.component';
import { FormsModule } from '@angular/forms';
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
import { GameOptionsPageComponent } from './game-options/game-options.component';
import { CommonModule } from '@angular/common';
import { ScoreboardFrameCardScoreComponent } from './scoreboard-frame-card-score/scoreboard-frame-card-score.component';


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
    GameOptionsPageComponent,
    BowlingGameComponent,
    ScoreboardFrameCardScoreComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ScoreboardFrameCardComponent,
    ScoreboardFrameCardScoreComponent
  ]
})
export class AppModule { }
