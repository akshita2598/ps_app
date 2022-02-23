import { Component, OnInit } from '@angular/core';
import { productList } from 'src/JSON/data';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  dataList  = productList ;
  layout : string = 'grid';

  constructor() { }

  ngOnInit(): void {
  }

  setLayout(value:string){
    this.layout = value ;
    console.log(this.layout);
  }

  sort(event){
     console.log(event.target.value);
     switch(event.target.value){
       case '1':
          {
            this.dataList = this.dataList.sort((low,high) => low.price - high.price);
            break ;
          }
       case '2':
         {
           this.dataList = this.dataList.sort((low,high) => high.price - low.price);
           break;
         }
       default:
         {
           this.dataList = this.dataList.sort((low,high) => low.price - high.price);
           break;
         }   

    }

  }

}
