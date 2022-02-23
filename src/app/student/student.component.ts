import { Component, OnInit } from '@angular/core';
import { studentData } from 'src/JSON/studentData';
import { SortPipe } from '../shared/sort.pipe';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentData  = studentData;
  studentData2 :Array<any>=[];
  clickCounts : any = {};
  keys : any ;
  columnName : string = '' ;
  ascorder = null;
  counter = 0 ;

  constructor() { }

  ngOnInit(): void {
    this.keys = Object.keys(this.studentData[0]);
    this.studentData2 = this.studentData.slice()
  }

  onHeaderClick(key:string){
    //this.ascorder = (this.columnName === key) ? !this.ascorder: true ;
    if(this.columnName===key){
      if(this.ascorder === true){
        this.ascorder = false ;
      }
      else if(this.ascorder === false){
        this.ascorder = null ;
      }
      else{
        this.ascorder = true;
      }
    }
    else{
      this.ascorder = true;
    }
    this.columnName = key;
  }

}


