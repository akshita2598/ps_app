import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerseriveService } from 'src/app/shared/timerserive.service';

@Component({
  selector: 'app-loguttonclick',
  templateUrl: './loguttonclick.component.html',
  styleUrls: ['./loguttonclick.component.css']
})
export class LoguttonclickComponent implements OnInit{
  pauseClicks : number ;
  startClicks : number ;
  subscription : Subscription

  constructor(private timerService:TimerseriveService) { }
 
  ngOnInit(): void {
    this.timerService.startCountValue.subscribe((data) => {
        this.startClicks=data;
    })
    this.timerService.pauseCountValue.subscribe((data) => {
        this.pauseClicks=data;
    })
  }



}
