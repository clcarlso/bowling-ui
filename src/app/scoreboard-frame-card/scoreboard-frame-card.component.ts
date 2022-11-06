import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard-frame-card',
  templateUrl: './scoreboard-frame-card.component.html',
  styleUrls: ['./scoreboard-frame-card.component.scss']
})
export class ScoreboardFrameCardComponent implements OnInit {


@Input() firstValue: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
