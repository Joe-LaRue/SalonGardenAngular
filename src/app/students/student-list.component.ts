import { Component, OnInit } from '@angular/core';

import { Student } from '../model';
import { StudentDataService } from '../services/studentData.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent  {

  students: Student[]; 

  constructor(private studentDataService : StudentDataService){

  }

  ngOnInit(){
    this.students = this.studentDataService.getStudents();
  }

}
