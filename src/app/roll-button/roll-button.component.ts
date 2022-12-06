import { RollButtonService } from './roll-button.service';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-roll-button',
  templateUrl: './roll-button.component.html',
  styleUrls: ['./roll-button.component.scss']
})
export class RollButtonComponent implements OnInit {

 

  constructor(private dataService: DataService, private rollButtonService: RollButtonService) { }

  ngOnInit(): void {
  }

  @Output() pin = new EventEmitter<string>(); 
  @Output() rollMap = new EventEmitter<Map<Number,Number[]>>();
  @Output() scores = new EventEmitter<Number[]>();

  buttonRoll(){

    try{
      //call service to roll pin
      this.rollButtonService.rollPins().subscribe((rollPinData:any)=>{
        this.pin.emit(rollPinData);

        //wait till the roll finishes before calling the roll map service
        this.rollButtonService.rollMap().subscribe((rollMapData:any)=>{
          this.rollMap.emit(rollMapData);

          //wait till the roll map service comes back to call the score service
          this.rollButtonService.getScore().subscribe((data:any)=>{
            this.scores.emit(data);
          });
        });
      });
    }
    catch (error) {
      console.error(error);
  }
}


}
