import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'sort',
    pure: true
})

export class SortPipe implements PipeTransform {
    transform(studentData : any[] , columnName: string , ascorder:any){
        let sortedArr ;
        if(ascorder === true){
           sortedArr = studentData.sort((a,b) =>  {
               //checking the type of the value for the column , if it's a string then convert to uppercase and then sort
               if(typeof a[columnName] === 'string'){
                 return a[columnName].toUpperCase() > b[columnName].toUpperCase() ? 1 : -1;
               }
               else 
                 return a[columnName] - b[columnName]
           })
           
        }
        else if(ascorder === false){
            sortedArr = studentData.sort((a,b) =>  {
                if(typeof a[columnName] === 'string'){
                  return b[columnName].toUpperCase() > a[columnName].toUpperCase() ? 1 : -1;
                }
                else 
                  return b[columnName] - a[columnName]
            })
        }
        else{
            sortedArr = studentData;
        }
       //console.log(sortedArr); 
       return sortedArr; 
       
    }
}