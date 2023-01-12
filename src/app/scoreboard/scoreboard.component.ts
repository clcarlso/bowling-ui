import { ScoreBoardDirective } from './scoreboard.directive';
import { ScoreboardFrameCardComponent } from './../scoreboard-frame-card/scoreboard-frame-card.component';
import { AfterViewInit, ApplicationRef, ComponentFactory, ComponentFactoryResolver, createComponent, EnvironmentInjector, NgZone, ViewContainerRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { BowlingGameDataModel, BowlingGameOptionsDataModel } from '../types';
import { ScoreboardFrameCardScoreComponent } from '../scoreboard-frame-card-score/scoreboard-frame-card-score.component';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],

})
export class ScoreboardComponent implements AfterViewInit  {
  @ViewChild(ScoreBoardDirective, {static: true}) scoreboardHost!: ScoreBoardDirective;

  @ViewChild('scoreboardHost', {read: ViewContainerRef}) container!: ViewContainerRef;
  @Input() rollMap:Map<String,any> = new Map<String,any>;
  @Input() scores:Number[] = [];

  @Input() bowlingGameOptionsParentInput: any;
  @Input() bowlingGameDataModelParentInput: any;

  bowlingGameOptionsDataModel!: BowlingGameOptionsDataModel;
  bowlingGameDataModel!: BowlingGameDataModel;
  private scoreboardSize = 9;
  constructor(private componentFactoryResolver : ComponentFactoryResolver) {
  }

  loadComponent(): void{

   
  }

  initializeScoreboard(){
    this.container.clear();
    for( let i=0; i< this.bowlingGameOptionsDataModel.frames;i++){
      const widgitOneRef = this.container.createComponent(ScoreboardFrameCardComponent);
      widgitOneRef.instance.frameNumber=1;
    }
  }

  initializeGameOptions(){
    this.bowlingGameOptionsDataModel = new BowlingGameOptionsDataModel(
      this.bowlingGameOptionsParentInput.uuid,
      this.bowlingGameOptionsParentInput.pins, 
      this.bowlingGameOptionsParentInput.frames, 
      this.bowlingGameOptionsParentInput.rollsPerFrame, 
      this.bowlingGameOptionsParentInput.endFrames, 
      this.bowlingGameOptionsParentInput.rollsPerEndFrame, 
      this.bowlingGameOptionsParentInput.mode
    );
  }

  initializeGameData(){
    this.bowlingGameDataModel = this.bowlingGameDataModelParentInput;
  }

  ngOnInit(): void {
    this.initializeGameOptions();
    this.initializeGameData();
    
    //this.loadComponent();
    //console.log(this.bowlingGameDataModelParentInput);
    //console.log(this.bowlingGameDataModel);
    //console.log(this.bowlingGameOptionsParentInput);
    //console.log(this.bowlingGameOptionsDataModel);
    
  }
  ngAfterViewInit(){
    this.initializeScoreboard();
  }
  
  ngOnChanges(changes: SimpleChanges){
    //this.loadComponent();
    console.log(changes);
  }
}
