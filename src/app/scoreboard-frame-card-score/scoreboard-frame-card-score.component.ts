import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scoreboard-frame-card-score',
  templateUrl: './scoreboard-frame-card-score.component.html',
  styleUrls: ['./scoreboard-frame-card-score.component.scss']
})
export class ScoreboardFrameCardScoreComponent implements OnInit {

  @Input() score: String = "";
  constructor() { }

  ngOnInit(): void {
  }

}
