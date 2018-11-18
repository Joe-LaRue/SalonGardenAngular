import { Component, OnInit } from '@angular/core';
import {  Router } from "@angular/router";

import { Student } from '../model';
import { StudentDataService } from '../services/studentData.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styles: []
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student;

  createStudent(){
    this.studentDataService.addStudent(this.student);
    this.router.navigate(['/', 'students']);
  }

  constructor(private studentDataService : StudentDataService, private router : Router){

  }

  ngOnInit() {
  }

}
