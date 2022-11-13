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

  scoreBoardData = {
    frameNumber : "",

   };

  onRoll(pins:string){
    this.rolls = [...this.rolls, pins];
    console.log(this.rolls);
  }

  addToRolls(roll:number){

  }
  ngOnChanges(){

  }
}
