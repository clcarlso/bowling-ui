import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() label: string = "";
  @Output() onClick = new EventEmitter<any>();
  
  onClickButton(event: any) {
      this.onClick.emit(event);
    }
}
