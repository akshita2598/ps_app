import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogbuttonclickComponent } from './logbuttonclick.component';

describe('LogbuttonclickComponent', () => {
  let component: LogbuttonclickComponent;
  let fixture: ComponentFixture<LogbuttonclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogbuttonclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogbuttonclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
