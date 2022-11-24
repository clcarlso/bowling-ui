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


@NgModule({
  declarations: [
    AppComponent,
    
    ScoreboardComponent,
    RollButtonComponent,
    ScoreButtonComponent,
    ScoreboardFrameCardComponent,
    ResetButtonComponent
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
