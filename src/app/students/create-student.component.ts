import { Component, OnInit } from '@angular/core';
import { StudentDetailComponent } from './student-detail.component';
import { Student } from '../model';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styles: []
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student;

  createStudent(){
    console.log(this.student);
  }

  ngOnInit() {
  }

}
