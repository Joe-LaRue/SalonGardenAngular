import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './students/student-list.component';
import { TechniqueListComponent } from './techniques/technique-list.component';
import { EvaluationListComponent } from './evaluations/evaluation-list.component';
import { CreateStudentComponent } from './students/create-student.component';
import { CreateTechniqueComponent } from './techniques/create-technique.component';

const routes: Routes = [
  {path:'students', component:StudentListComponent},
  {path:'students/create', component:CreateStudentComponent},
  {path:'techniques', component:TechniqueListComponent},
  {path:'techniques/create', component:CreateTechniqueComponent},
  {path:'evaluations', component:EvaluationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
