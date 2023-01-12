import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardFrameCardScoreComponent } from './scoreboard-frame-card-score.component';

describe('ScoreboardFrameCardScoreComponent', () => {
  let component: ScoreboardFrameCardScoreComponent;
  let fixture: ComponentFixture<ScoreboardFrameCardScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreboardFrameCardScoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardFrameCardScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
