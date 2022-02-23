import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'app-inputtimer',
  templateUrl: './inputtimer.component.html',
  styleUrls: ['./inputtimer.component.css']
})
export class InputtimerComponent implements OnInit {
  @Output() timerValueEvent = new EventEmitter();
  @Output() timerStampEvent = new EventEmitter();
  @Output() startTimerEvent = new EventEmitter();
  @Output() startClicks = new EventEmitter();
  @Output() pauseClicks = new EventEmitter();
  
  timerValue = '' ;
  timestamp : string ;
  startTimer : boolean = false  ;
  startCount = 0;
  pauseCount = 0;
  disabled=false;

  constructor() { }

  ngOnInit(): void {
  }

  onStartorPauseTimer(){
   this.disabled=true 
   this.startTimer = !this.startTimer;
   if(this.startTimer===true){this.startCount++};
   if(this.startTimer===false)(this.pauseCount++)
   this.timerValueEvent.emit(this.timerValue);
   this.timestamp = new Date().toString();
   this.timerStampEvent.emit({start:this.startTimer,timestamp:this.timestamp})
   this.startTimerEvent.emit(this.startTimer);
   this.startClicks.emit(this.startCount);
   this.pauseClicks.emit(this.pauseCount);
  }

  onReset(){
    this.timerValue='';
    this.timestamp='';
    this.startTimer=false;
    this.startCount=0;
    this.pauseCount=0;
    this.disabled=false
    this.timerValueEvent.emit(this.timerValue);
    this.timerStampEvent.emit({});
    this.startClicks.emit(this.startCount);
    this.pauseClicks.emit(this.pauseCount);
  }

}
