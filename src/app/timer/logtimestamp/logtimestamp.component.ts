import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logtimestamp',
  templateUrl: './logtimestamp.component.html',
  styleUrls: ['./logtimestamp.component.css']
})
export class LogtimestampComponent implements OnInit {
 @Input() timeStampData : any ;
 timeStampObj : any = [] ;
 @Input() startTimerValue : boolean;
 text : string ;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.setStartPauseText();
  }

  setStartPauseText(){
    // console.log(this.startTimerValue);
    // if(this.startTimerValue === true || this.startTimerValue === false){
    //   this.startTimerValue === true ? this.text = 'Started at' : this.text = 'Paused at'
    // }
    // else{
    //   this.text = '';
    // }
    if(JSON.stringify(this.timeStampData) !== JSON.stringify({})){
      this.timeStampObj.push(this.timeStampData)}
      // else{
      //   this.timeStampObj=null
      // }
  }

  

}
