import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerseriveService } from 'src/app/shared/timerserive.service';

@Component({
  selector: 'app-logtime-stamp',
  templateUrl: './logtime-stamp.component.html',
  styleUrls: ['./logtime-stamp.component.css']
})


export class LogtimeStampComponent implements OnInit {
  timeStampObj : any = [];
  subscription: Subscription

  constructor(private timerService:TimerseriveService) { }
  

  ngOnInit(): void {
    this.setStartPauseText();
  }
  
  setStartPauseText(){
    this.timerService.timestampValue.subscribe((data) => {
      if(JSON.stringify(data) !== JSON.stringify({})){
      this.timeStampObj.push(data)}
    })
  }

  

}
