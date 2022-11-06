import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bowling-ui';

  currentRoll = "";

  onRoll(pins:string){
    this.currentRoll = pins;
  }
}
