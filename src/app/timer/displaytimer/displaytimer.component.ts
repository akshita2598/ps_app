import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
//import { clearInterval } from 'timers';

@Component({
  selector: 'app-displaytimer',
  templateUrl: './displaytimer.component.html',
  styleUrls: ['./displaytimer.component.css']
})
export class DisplaytimerComponent implements OnInit , OnChanges {

  @Input() timerdata : any ;
  @Input() startTimerValue : boolean;
  timerval : any ;
  startTimer: any ;

  @ViewChild('value',{static: false})timercount : ElementRef ;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.timerdata){
       //console.log(this.startTimerValue);
       this.timerdata = parseInt(this.timerdata);
       if(this.startTimerValue === true){
       this.startTimer = setInterval(() => {
          if(this.timerdata <= 0){
              clearInterval(this.startTimer)
              this.timerval = 0;
          }
          else{
            //this.timercount.nativeElement.innerHTML=this.timerdata
            this.timerval = this.timerdata;
          };
          this.timerdata-=1;
          // console.log(this.startTimer);
       },1000)
    }else if(this.startTimerValue === false){
      if(this.startTimer){
        clearInterval(this.startTimer)
      }
    }}
    else{
      this.timerval = this.timerdata
    }
  }
  }

 



  


