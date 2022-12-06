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


  onRoll(pins:string){
    this.rolls = [...this.rolls, pins];
  }

  gatherScore(scores: Number[]){
    this.scores = scores;
  }

  resetGame(resetFlag: boolean){
    if(resetFlag == true){
      this.rolls = [];
      this.scores = []
    }
  }
  
  ngOnChanges(){

  }
}
