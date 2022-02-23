import { TestBed } from '@angular/core/testing';

import { TimerseriveService } from './timerserive.service';

describe('TimerseriveService', () => {
  let service: TimerseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
