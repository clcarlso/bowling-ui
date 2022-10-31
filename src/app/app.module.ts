import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { RollButtonComponent } from './roll-button/roll-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ScoreboardComponent,
    RollButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
