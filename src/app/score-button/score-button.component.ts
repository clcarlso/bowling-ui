import { ScoreButtonService } from './score-button.service';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss']
})
export class ScoreButtonComponent implements OnInit {

 

  constructor(private dataService: DataService, private scoreButtonService: ScoreButtonService) { }

  ngOnInit(): void {
  }

  @Output() scores = new EventEmitter<Number[]>(); 

  buttonRoll(){

    try{
      this.scoreButtonService.getScore().subscribe((data:any)=>{
        this.scores.emit(data);
      });
    

    }
    catch{}
  }


}
