import { Component, OnInit } from '@angular/core';
import { TimerseriveService } from 'src/app/shared/timerserive.service';

@Component({
  selector: 'app-input-timer-value',
  templateUrl: './input-timer-value.component.html',
  styleUrls: ['./input-timer-value.component.css']
})
export class InputTimerValueComponent implements OnInit {


  timerValue ;
  timestamp: string;
  startTimer: boolean = false;
  startCount = 0;
  pauseCount = 0;
  timerChange: boolean;
  disabled = false;


  constructor(private timerService: TimerseriveService) { }

  ngOnInit(): void {
  }

  myFunction() {
    this.timerChange = true
  }

  onStartorPauseTimer() {
    this.disabled = true
    this.startTimer = !this.startTimer;
    if (this.startTimer === true) { this.startCount++ };
    if (this.startTimer === false) (this.pauseCount++)
    this.timestamp = new Date().toString();
    if (this.startTimer === true && this.startCount === 1) { this.timerService.timer.next(this.timerValue) };
    this.timerService.startTimerValue.next(this.startTimer);
    this.timerService.timestampValue.next({ start: this.startTimer, timestamp: this.timestamp })
    this.timerService.startCountValue.next(this.startCount);
    this.timerService.pauseCountValue.next(this.pauseCount);
  }



  onReset() {
    this.disabled = false;
    this.timerValue = '';
    this.timestamp = '';
    this.startTimer = false;
    this.startCount = 0;
    this.pauseCount = 0;
    this.timerService.timer.next(this.timerValue);
    this.timerService.timestampValue.next({});
    this.timerService.startCountValue.next(this.startCount);
    this.timerService.pauseCountValue.next(this.pauseCount);
  }

}
