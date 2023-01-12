import { Component, OnInit, Input, ViewContainerRef, ViewChild } from '@angular/core';
import { ScoreboardFrameCardScoreComponent } from '../scoreboard-frame-card-score/scoreboard-frame-card-score.component';

@Component({
  selector: 'app-scoreboard-frame-card',
  templateUrl: './scoreboard-frame-card.component.html',
  styleUrls: ['./scoreboard-frame-card.component.scss']
})
export class ScoreboardFrameCardComponent implements OnInit {

@ViewChild('scoreboardFrameCardScore', { read: ViewContainerRef}) scoreboardFrameCardScore!: ViewContainerRef;

@Input() frameNumber:number = 0;
@Input() frameRolls:number[] = [];
@Input() rollsPerFrame:number = 2;
@Input() frameScore:string = "";
/*@Input() frameTotal: string = "0";*/

  constructor() { }

  loadComponents(): void{
    if (this.scoreboardFrameCardScore!== undefined){
      this.scoreboardFrameCardScore.clear();
    if (true){
      for(let i=0;i<this.rollsPerFrame;i++){
        //create the frame card
        const componentRef = this.scoreboardFrameCardScore.createComponent(ScoreboardFrameCardScoreComponent);
        //display the current frame number on the card
        componentRef.instance.score = "1";
        //this.ViewContainerRef.nativeElement.setAttribute("class", "test")
        //componentRef.instance.frameNumber = (i+1).toString();
        //frame roll map is our current mapping of rolls
        //let frameRollMap;
        //if(this.rollMap.has(i.toString()) && this.rollMap.get(i.toString()) !== undefined){
        //  frameRollMap = this.rollMap.get(i.toString());
        //}
        
        //if(frameRollMap){
          //TODO: Change how this places the values in the frame as we will expand more than 2
        //  if (frameRollMap.length >= 1){
        //    componentRef.instance.firstNum = frameRollMap[0].toString();
        //  }
        //  if (frameRollMap.length >= 2){
        //    componentRef.instance.secondNum = frameRollMap[1].toString();
        //  }
        //  if(this.scores[i] !== undefined){
        //    componentRef.instance.frameScore = this.scores[i].toString();
        //  }
        //}
      }
    }
  }
}

  ngOnInit(): void {
    this.loadComponents();
  }

}
