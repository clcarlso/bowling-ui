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
  @Input() rolls:string[] = [];
  @Input() scores:Number[] = [];

  private scoreboardSize = 9;
  constructor() {
    
  }

  loadComponents(): void{
      if (this.scoreContain!== undefined){
        this.scoreContain.clear();
      
      for(let i=0;i< this.scoreboardSize;i++){
        const componentRef = this.scoreContain.createComponent(ScoreboardFrameCardComponent);
        componentRef.instance.frameNumber = (i+1).toString();
        let frameRef = i*2;
       
        componentRef.instance.firstNum = this.rolls[frameRef];
        componentRef.instance.secondNum = this.rolls[frameRef+1];
        if(this.scores[i] !== undefined){
          console.log(i + " :: " + this.scores[i].toString());
          componentRef.instance.frameScore = this.scores[i].toString();
        }
        
      }
    }
  }
  ngOnInit(): void {
    
    
  }
  ngAfterViewInit(){
    //this.loadComponents();
  }

  ngOnChanges(changes: SimpleChanges){
    this.loadComponents();
    console.log(changes);
  }
}
