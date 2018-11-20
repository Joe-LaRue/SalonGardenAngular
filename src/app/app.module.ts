import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list.component';
import { TechniqueListComponent } from './techniques/technique-list.component';
import { EvaluationListComponent } from './evaluations/evaluation-list.component';
import { StudentDetailComponent } from './students/student-detail.component';
import { CreateStudentComponent } from './students/create-student.component';
import { StudentDataService } from './services/studentData.service';
import { LoggerService } from './services/logger.service';
import { CreateTechniqueComponent } from './techniques/create-technique.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    TechniqueListComponent,
    EvaluationListComponent,
    StudentDetailComponent,
    CreateStudentComponent,
    CreateTechniqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentDataService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
