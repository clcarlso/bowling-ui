

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameOptionService } from './game-options.service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.scss']
})
export class GameOptionsPageComponent implements OnInit {


  @Output() gameOptionResponseData = new EventEmitter<any>();


  gameOptionsData = {
    pins: 0,
    frames: 0,
    rollsPerFrame: 0,
    endFrames: 0,
    rollsPerEndFrame: 0,
    mode: ""
  }

  constructor(private router: Router, private route: ActivatedRoute, private gameOptionService: GameOptionService) {
    this.gameOptionsData = {
      pins: 10,
      frames: 10,
      rollsPerFrame: 2,
      endFrames: 1,
      rollsPerEndFrame: 3,
      mode: "Random"
    }
  }

  ngOnInit(): void {
  }

  submitButtonPress(){
    let gameUUID: any;

    this.gameOptionService.createGame(this.gameOptionsData).subscribe((data:any) => {
      //console.log(data);
      this.gameOptionResponseData.emit(data);
    });

    //this.router.navigate(['/game-page']);
  }
  
}
