import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer = '';
  timeStamp = '';
  startTimer : boolean;
  startClickCount : number ;
  pauseClickCount : number;

  constructor() { }

  ngOnInit(): void {
  }

  getTimerValue(value:string){
   this.timer = value ;
  }

  getTimerStampValue(value:string){
   this.timeStamp = value;
  }

  getStartTimerValue(value:boolean){
    this.startTimer=value;
  }
  
  getstartClicks(value:number){
    this.startClickCount = value;
  } 
  
  getpauseClicks(value:number){
    this.pauseClickCount = value ;
  }
}
