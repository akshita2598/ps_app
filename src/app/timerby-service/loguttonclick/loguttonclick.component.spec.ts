import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoguttonclickComponent } from './loguttonclick.component';

describe('LoguttonclickComponent', () => {
  let component: LoguttonclickComponent;
  let fixture: ComponentFixture<LoguttonclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoguttonclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoguttonclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
