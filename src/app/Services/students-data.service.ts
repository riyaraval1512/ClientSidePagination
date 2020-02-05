import { Injectable } from '@angular/core';
import {IStudent} from 'src/app/models/student'

@Injectable({
  providedIn: 'root'
})
export class StudentsDataService {

  constructor() { }
  public studentDetails:IStudent[]=[
    {
      "id": 1,
      "name": "riya",
      "semester": 8
    },
    {
      "id": 2,
      "name": "nirali",
      "semester": 8
    },
    {
      "id": 3,
      "name": "mehul",
      "semester": 8
    },
    {
      "id": 4,
      "name": "kishan",
      "semester": 8
    },
    {
      "id": 5,
      "name": "kalp",
      "semester": 7
    },
    {
      "id": 6,
      "name": "ayushi",
      "semester": 7
    },
    {
      "id": 7,
      "name": "riya",
      "semester": 8
    },
    {
      "id": 8,
      "name": "nirali",
      "semester":8
    },
    {
      "id": 9,
      "name": "mehul",
      "semester": 8
    },
    {
      "id": 10,
      "name": "kishan",
      "semester": 8
    },
    {
      "id": 11,
      "name": "kalp",
      "semester": 7
    },
    {
      "id": 12,
      "name": "ayushi",
      "semester": 7
    }
  ];


  getStudentLength(){
    return this.studentDetails.length;
  }

  getdata(index){
    let start = (index-1)*5;
    let end = (index-1)*5+5;
    return this.studentDetails.filter((student,i)=>{
      if(i>=start && i<end){
        // console.log('true')
        return true;
      }
      return false;
    })
  }
}
