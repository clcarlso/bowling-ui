import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RollButtonComponent } from './roll-button/roll-button.component';
import { ScoreboardFrameCardComponent } from './scoreboard-frame-card/scoreboard-frame-card.component';


@NgModule({
  declarations: [
    AppComponent,
    
    ScoreboardComponent,
    RollButtonComponent,
    ScoreboardFrameCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
