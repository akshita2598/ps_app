import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logbuttonclick',
  templateUrl: './logbuttonclick.component.html',
  styleUrls: ['./logbuttonclick.component.css']
})
export class LogbuttonclickComponent implements OnInit {

  @Input() pauseClicks : number ;
  @Input() startClicks : number ;

  constructor() { }

  ngOnInit(): void {
  }

}
