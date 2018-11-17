import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './students/student-list.component';
import { TechniqueListComponent } from './techniques/technique-list.component';
import { EvaluationListComponent } from './evaluations/evaluation-list.component';
import { StudentDetailComponent } from './students/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    TechniqueListComponent,
    EvaluationListComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
