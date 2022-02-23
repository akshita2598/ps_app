import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTimerValueComponent } from './input-timer-value.component';

describe('InputTimerValueComponent', () => {
  let component: InputTimerValueComponent;
  let fixture: ComponentFixture<InputTimerValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTimerValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTimerValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
