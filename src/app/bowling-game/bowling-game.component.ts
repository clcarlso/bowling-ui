import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BowlingGameDataModel, BowlingGameOptionsDataModel } from '../types';

@Component({
  selector: 'app-bowling-game',
  templateUrl: './bowling-game.component.html',
  styleUrls: ['./bowling-game.component.scss']
})



export class BowlingGameComponent implements OnInit {



  constructor(private router: Router) { 
    

  }
  
  bowlingGameOptionsDataModel!: BowlingGameOptionsDataModel;
  bowlingGameDataModel!: BowlingGameDataModel;

  currentRoll: string = "";
  //rolls:string[] = [];
  //rollMap: Map<String, any> = new Map();
  //scores:Number[] = [];

  
  @Input() bowlingGameDataInput: any;

  onRoll(pin:string){
    this.bowlingGameDataModel.currentRoll = pin;
  }

  updateRollMap(newRollMap:Map<Number,Number[]>){
    //this.rollMap = new Map(Object.entries(newRollMap));
    this.bowlingGameDataModel.rollMap = new Map(Object.entries(newRollMap));
  }

  gatherScore(newScores: Number[]){
    //this.scores = newScores;
    this.bowlingGameDataModel.scores = newScores;
  }

  resetGame(resetFlag: boolean){
    //this.rollMap = Object.assign(new Map(), {});
    this.bowlingGameDataModel.rollMap = Object.assign(new Map(), {});
    if(resetFlag == true){
      //this.rolls = [];
      this.bowlingGameDataModel.rolls = [];
      //this.scores = [];
      this.bowlingGameDataModel.scores = [];
    }
  }
  

  ngOnInit(): void {
    this.bowlingGameOptionsDataModel = new BowlingGameOptionsDataModel(
      history.state.data.uuid,
      history.state.data.pins,
      history.state.data.frames,
      history.state.data.rollsPerFrame,
      history.state.data.endFrames,
      history.state.data.rollsPerEndFrame,
      history.state.data.mode
    );
    this.bowlingGameDataModel = new BowlingGameDataModel();
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("changes" + this.bowlingGameDataInput);
  }
}
