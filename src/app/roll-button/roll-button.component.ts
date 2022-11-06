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

  private products:any[] = [];

  constructor(private dataService: DataService, private rollButtonService: RollButtonService) { }

  ngOnInit(): void {
  }

  @Output() pins = new EventEmitter<string>(); 

  buttonRoll(){
    let max = 10;
    let min = 0;
    let pinsKnockedOver = Math.floor(Math.random() * (max - min + 1));
    let pinsDisplayable = pinsKnockedOver.toString();

    try{
      this.rollButtonService.rollPins(pinsKnockedOver).subscribe((data:any)=>{
        console.log(data);
      });
    

      console.log(pinsDisplayable);
      this.pins.emit(pinsDisplayable);
      

    }
    catch{}
  }


}
