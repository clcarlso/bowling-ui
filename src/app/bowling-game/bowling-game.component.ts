import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BowlingGameDataModel, BowlingGameOptionsDataModel } from '../types';

@Component({
  selector: 'app-bowling-game',
  templateUrl: './bowling-game.component.html',
  styleUrls: ['./bowling-game.component.scss']
})



export class BowlingGameComponent implements OnInit {

  constructor() { 
    
  }
  
  bowlingGameOptionsDataModel!: BowlingGameOptionsDataModel;
  bowlingGameDataModel!: BowlingGameDataModel;

  currentRoll: string = "";
  rolls:string[] = [];
  rollMap: Map<String, any> = new Map();
  scores:Number[] = [];

  @Input() gameID:string = "1";
  @Input() bowlingGameDataInput: any;

  onRoll(pin:string){
    this.bowlingGameDataModel.currentRoll = pin;
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
    this.bowlingGameOptionsDataModel = new BowlingGameOptionsDataModel(
      this.bowlingGameDataInput.uuid,
      this.bowlingGameDataInput.pins, 
      this.bowlingGameDataInput.frames, 
      this.bowlingGameDataInput.rollsPerFrame, 
      this.bowlingGameDataInput.endFrames, 
      this.bowlingGameDataInput.rollsPerEndFrame, 
      this.bowlingGameDataInput.mode
    );
    console.log("init" + this.bowlingGameDataInput.uuid);
    this.bowlingGameDataModel = new BowlingGameDataModel();
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("changes" + this.bowlingGameDataInput);
  }
}
