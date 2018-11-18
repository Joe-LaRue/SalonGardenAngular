import { Injectable } from '@angular/core';
import { Student } from '../model';
import { getTestStudents } from './test-students';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  students: Student[];

  getStudents() : Student[] {
    this.logger.log(`${this.students.length} Students`);
    return this.students;
  }

  getStudentById(id: number) : Student{
    return this.students.find(x => x.id === id);
  }

  addStudent(student : Student){
    this.logger.log(`adding student to repository`);
    this.students.push(student);
    this.logger.log(`student repository now has ${this.students.length} students`);
  }

  constructor(private logger : LoggerService) { 
    this.students = getTestStudents();
    this.logger.log(`Initialized ${this.students.length} from repository`)
  }
}
