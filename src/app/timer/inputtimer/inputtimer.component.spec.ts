import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtimerComponent } from './inputtimer.component';

describe('InputtimerComponent', () => {
  let component: InputtimerComponent;
  let fixture: ComponentFixture<InputtimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputtimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
