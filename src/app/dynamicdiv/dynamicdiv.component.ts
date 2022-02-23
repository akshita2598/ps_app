import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamicdiv',
  templateUrl: './dynamicdiv.component.html',
  styleUrls: ['./dynamicdiv.component.css']
})
export class DynamicdivComponent implements OnInit {


  containers : any = [];
  @HostListener('window:scroll') onScroll(e:Event):void{
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
      //console.log("scroll down")
      this.add();
    }
  }

  add(){
    this.containers.push(this.containers.length);
  }


  constructor() { }

  ngOnInit(): void {
    if(window.screen.width >= 480) {
      console.log(window.screen.width , window.screen.height);
      this.add();
    }
  }

 
  alertOnDiv(i){
    //console.log(i)
    window.alert(`Button ${i+1} is clicked!`)
  }

}
