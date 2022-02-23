import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtimeStampComponent } from './logtime-stamp.component';

describe('LogtimeStampComponent', () => {
  let component: LogtimeStampComponent;
  let fixture: ComponentFixture<LogtimeStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogtimeStampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtimeStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
