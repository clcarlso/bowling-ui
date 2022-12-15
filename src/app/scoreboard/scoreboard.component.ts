import { ScoreboardFrameCardComponent } from './../scoreboard-frame-card/scoreboard-frame-card.component';
import { ApplicationRef, ComponentFactoryResolver, createComponent, EnvironmentInjector } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @ViewChild('scoreContain', { read: ViewContainerRef}) scoreContain!: ViewContainerRef;
  @Input() rollMap:Map<String,any> = new Map<String,any>;
  @Input() scores:Number[] = [];

  private scoreboardSize = 9;
  constructor() {
    
  }

  loadComponents(): void{
      if (this.scoreContain!== undefined){
        this.scoreContain.clear();
      
      for(let i=0;i< this.scoreboardSize;i++){
        //create the frame card
        const componentRef = this.scoreContain.createComponent(ScoreboardFrameCardComponent);
        //display the current frame number on the card
        componentRef.instance.frameNumber = (i+1).toString();
        //this.ViewContainerRef.nativeElement.setAttribute("class", "test")
        componentRef.instance.frameNumber = (i+1).toString();
        //frame roll map is our current mapping of rolls
        let frameRollMap;
        if(this.rollMap.has(i.toString()) && this.rollMap.get(i.toString()) !== undefined){
          frameRollMap = this.rollMap.get(i.toString());
        }
        
        if(frameRollMap){
          //TODO: Change how this places the values in the frame as we will expand more than 2
          if (frameRollMap.length >= 1){
            componentRef.instance.firstNum = frameRollMap[0].toString();
          }
          if (frameRollMap.length >= 2){
            componentRef.instance.secondNum = frameRollMap[1].toString();
          }
          if(this.scores[i] !== undefined){
            componentRef.instance.frameScore = this.scores[i].toString();
          }
        }
      }
    }
  }
  ngOnInit(): void {
    this.loadComponents();
    
  }
  ngAfterViewInit(){
    this.loadComponents();
  }

  ngOnChanges(changes: SimpleChanges){
    this.loadComponents();
  }
}
