import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { StudentDataService } from '../services/studentData.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styles: []
})
export class CreateStudentComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;


  createStudent() {
    console.log('create student');
    this.studentDataService.createStudent(this.firstName, this.lastName, this.email);
    this.router.navigate(['/', 'students']);
  }

  constructor(private studentDataService: StudentDataService, private router: Router) {

  }

  ngOnInit() {
  }

}
