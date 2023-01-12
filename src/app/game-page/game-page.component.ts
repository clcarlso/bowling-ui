import { GameOptionsPageComponent } from './../game-options/game-options.component';
import { Component, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { BowlingGameComponent } from '../bowling-game/bowling-game.component';
import { ScoreboardFrameCardComponent } from '../scoreboard-frame-card/scoreboard-frame-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  @ViewChild('gameContainer', { read: ViewContainerRef}) gameContainer!: ViewContainerRef;
  gamePageBowlingGameData: any;
  
  constructor(private router: Router) { }
  
  //gameOptionVisibility = true;
  //bowlingGameVisibility = false;

  gameOptionSubmission(gameOptionResponseData: any){
    this.gamePageBowlingGameData = gameOptionResponseData;
    
    this.router.navigate(['/bowling-game'], {
      
      state: {
        data: this.gamePageBowlingGameData
      }
    });
  }
 
  loadComponents(): void{
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
  }
 
  
}
