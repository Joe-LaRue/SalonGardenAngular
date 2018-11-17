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


@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    TechniqueListComponent,
    EvaluationListComponent,
    StudentDetailComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
