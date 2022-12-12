

import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GameOptionService } from './game-option-page.service';

@Component({
  selector: 'app-game-option-page',
  templateUrl: './game-option-page.component.html',
  styleUrls: ['./game-option-page.component.scss']
})
export class GameOptionPageComponent implements OnInit {


  gameOptionsTest = {
    pins: 10,
    frames: 10,
    rollsPerFrame: 2,
    endFrames: 1,
    rollsPerEndFrame: 3,
    mode: "Random"
  }

  constructor(private router: Router, private route: ActivatedRoute, private gameOptionService: GameOptionService) {
    
  }

  ngOnInit(): void {
  }

  submitButtonPress(){
    let gameUUID: any;

    this.gameOptionService.createGame(this.gameOptionsTest).subscribe((data:any) => {
      console.log(data);
    });

    this.router.navigate(['/game-page']);
  }
  
}
