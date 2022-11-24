import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard-frame-card',
  templateUrl: './scoreboard-frame-card.component.html',
  styleUrls: ['./scoreboard-frame-card.component.scss']
})
export class ScoreboardFrameCardComponent implements OnInit {


@Input() frameNumber: string = "";
@Input() firstNum:string = "";
@Input() secondNum:string = "";
@Input() frameScore:string = "";
/*@Input() frameTotal: string = "0";*/

  constructor() { }

  ngOnInit(): void {
  }

}
