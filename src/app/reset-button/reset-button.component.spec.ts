import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetButtonComponent } from './reset-button.component';

describe('ResetButtonComponent', () => {
  let component: ResetButtonComponent;
  let fixture: ComponentFixture<ResetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
