import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerbyServiceComponent } from './timerby-service.component';

describe('TimerbyServiceComponent', () => {
  let component: TimerbyServiceComponent;
  let fixture: ComponentFixture<TimerbyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerbyServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerbyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
