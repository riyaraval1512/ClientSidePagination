import { Component } from '@angular/core';
import { StudentsDataService } from './Services/students-data.service';
import { IStudent } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private _studentService:StudentsDataService){}

  students:IStudent[];
  page = 1;
  pageSize = 5;
  collectionSize:number;


  ngOnInit(){
    this.students=this._studentService.studentDetails;
    this.collectionSize=this.students.length;
  }
  get studentsData():IStudent[] {
    return this.students.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  sortByName(){
    this.students.sort((a,b)=>{
      return  a.name.toUpperCase()>b.name.toUpperCase() ?1:-1;
    })
// {
//   if(a.name.toUpperCase()>b.name.toUpperCase()){
//     return 1;
//   }
//   else{
//     return -1;
//   }
// })
    }
    sortBySemester(){
      this.students.sort((a,b)=>{
        return  a.semester>b.semester ?1:-1;
      })
    }
  
  }
