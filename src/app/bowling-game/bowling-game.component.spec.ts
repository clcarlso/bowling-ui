import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlingGameComponent } from './bowling-game.component';

describe('GamePageComponent', () => {
  let component: BowlingGameComponent;
  let fixture: ComponentFixture<BowlingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowlingGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BowlingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
