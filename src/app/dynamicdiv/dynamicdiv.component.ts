import { Component, HostListener, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(public snackBar : MatSnackBar) { }

  ngOnInit(): void {
    if(window.screen.width >= 480) {
      //console.log(window.screen.width , window.screen.height);
      this.add();
    }
  }

  openSnackBar(message , action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: 'blue-snackbar',
      verticalPosition: 'top'
    });
  }

}
