import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardFrameCardComponent } from './scoreboard-frame-card.component';

describe('ScoreboardFrameCardComponent', () => {
  let component: ScoreboardFrameCardComponent;
  let fixture: ComponentFixture<ScoreboardFrameCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardFrameCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardFrameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
