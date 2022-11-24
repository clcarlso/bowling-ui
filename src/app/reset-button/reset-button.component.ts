import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ResetButtonService } from './reset-button.service';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.scss']
})
export class ResetButtonComponent implements OnInit {

 

  constructor(private dataService: DataService, private resetButtonService: ResetButtonService) { }

  ngOnInit(): void {
  }

  @Output() resetReturn = new EventEmitter<boolean>(); 

  buttonRoll(){
    
    try{
      this.resetButtonService.resetScore().subscribe((data:any)=>{
        console.log(data);
        this.resetReturn.emit(data);
      });
      
    }
    catch{}
  }


}