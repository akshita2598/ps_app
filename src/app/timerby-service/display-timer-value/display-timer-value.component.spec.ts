import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTimerValueComponent } from './display-timer-value.component';

describe('DisplayTimerValueComponent', () => {
  let component: DisplayTimerValueComponent;
  let fixture: ComponentFixture<DisplayTimerValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTimerValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTimerValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
