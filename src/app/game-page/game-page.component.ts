import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor() { }
  
  currentRoll: string = "";
  rolls:string[] = [];
  rollMap: Map<String, any> = new Map();
  scores:Number[] = [];


  onRoll(newPin:string){
    this.currentRoll = newPin;
  }

  updateRollMap(newRollMap:Map<Number,Number[]>){
    this.rollMap = new Map(Object.entries(newRollMap));
  }

  gatherScore(newScores: Number[]){
    this.scores = newScores;
  }

  resetGame(resetFlag: boolean){
    this.rollMap = Object.assign(new Map(), {});
    if(resetFlag == true){
      this.rolls = [];
      this.scores = []
    }
  }
  ngOnInit(): void {
  }

}
