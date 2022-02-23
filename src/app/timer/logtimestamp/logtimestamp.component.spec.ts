import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogtimestampComponent } from './logtimestamp.component';

describe('LogtimestampComponent', () => {
  let component: LogtimestampComponent;
  let fixture: ComponentFixture<LogtimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogtimestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogtimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
