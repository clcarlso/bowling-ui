import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionPageComponent } from './game-options.component';

describe('GameOptionPageComponent', () => {
  let component: GameOptionPageComponent;
  let fixture: ComponentFixture<GameOptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOptionPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
