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
  collectionSize:number=100
  order:string='decending';


  ngOnInit(){
     console.log(this.page)
     this.collectionSize = this._studentService.getStudentLength();

    // this.students=this._studentService.studentDetails;
    this.students = this._studentService.getdata(this.page)
    console.log(this.students);
  }
  // get studentsData():IStudent[] {
  //   console.log('ss')
  //   // return this.students.slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  // }
  sortBy(key){
        if(this.order=='decending'){
          this.students.sort((a,b)=>{
            console.log(a);
            return  (a[key]).toString().toUpperCase()>(b[key]).toString().toUpperCase() ?1:-1;
          });
          this.order="ascending";
          }
        else{
          this.students.sort((a,b)=>{
            return  (a[key]).toString().toUpperCase()<(b[key]).toString().toUpperCase() ?1:-1;
            });
            this.order='decending';
        }
      
    }

    onPageClick(p){
      console.log(p)
      console.log(this.page)
      this.students = this._studentService.getdata(this.page)
      console.log(this.students);
    }
    
  
  }
