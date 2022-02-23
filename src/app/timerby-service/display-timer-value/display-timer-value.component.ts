import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TimerseriveService } from 'src/app/shared/timerserive.service';

@Component({
  selector: 'app-display-timer-value',
  templateUrl: './display-timer-value.component.html',
  styleUrls: ['./display-timer-value.component.css']
})
export class DisplayTimerValueComponent implements OnInit {

  timerdata : any ;
  startTimerValue : Boolean;
  timerval : any ;
  startTimer: any ;
  subscription: Subscription 


  constructor(private timerService:TimerseriveService) { }

  ngOnInit(): void {
   
    this.timerService.timer.subscribe((data)=> {
      this.timerdata=data;
      console.log(this.timerdata);
      if(!this.timerdata){this.OnTimerChanges()};
    });
    this.timerService.startTimerValue.subscribe((data)=>{
      this.startTimerValue=data;
        
      this.OnTimerChanges();
    })
  }

  OnTimerChanges(){
    if(this.timerdata)
    {
       this.timerdata = parseInt(this.timerdata);
       if(this.startTimerValue === true){
       this.startTimer = setInterval(() => {
          if(this.timerdata <= 0){
              clearInterval(this.startTimer)
              this.timerval = 0;
          }
          else{
            this.timerval = this.timerdata;
          };
          this.timerdata-=1;
       },1000)
    }else if(this.startTimerValue === false){
      if(this.startTimer){
        clearInterval(this.startTimer);
      }
    }
  }
    else{
      this.timerval = 0;
      clearInterval(this.startTimer);
    }
  }
}
