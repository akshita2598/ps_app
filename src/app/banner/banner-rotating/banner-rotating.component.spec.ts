import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerRotatingComponent } from './banner-rotating.component';

describe('BannerRotatingComponent', () => {
  let component: BannerRotatingComponent;
  let fixture: ComponentFixture<BannerRotatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerRotatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerRotatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
