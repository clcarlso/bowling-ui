import { GameOptionsPageComponent } from './../game-options/game-options.component';
import { Component, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { BowlingGameComponent } from '../bowling-game/bowling-game.component';
import { ScoreboardFrameCardComponent } from '../scoreboard-frame-card/scoreboard-frame-card.component';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @ViewChild('gameContainer', { read: ViewContainerRef}) gameContainer!: ViewContainerRef;
  gameUUID: string = "";
  gamePageBowlingGameData: any;
  constructor() { }
  
  gameOptionVisibility = true;
  bowlingGameVisibility = false;

  gameOptionSubmission(gameOptionResponseData: any){
    this.gamePageBowlingGameData = gameOptionResponseData;
    this.gameOptionVisibility = false;
    this.bowlingGameVisibility = true;
  }
 
  loadComponents(): void{
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  }
 
  
}
