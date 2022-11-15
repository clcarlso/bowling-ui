import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreButtonComponent } from './score-button.component';

describe('ScoreButtonComponent', () => {
  let component: ScoreButtonComponent;
  let fixture: ComponentFixture<ScoreButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
