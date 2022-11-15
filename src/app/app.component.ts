import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bowling-ui';

  //currentRoll = "";
  currentRoll: number = 0;
  rolls:string[] = [];

  scores:Number[] = [];

  scoreBoardData = {
    frameNumber : "",

   };

  onRoll(pins:string){
    this.rolls = [...this.rolls, pins];
    console.log(this.rolls);
  }

  gatherScore(scores: Number[]){
    this.scores = scores;
    console.log(this.scores);
  }
  
  ngOnChanges(){

  }
}
