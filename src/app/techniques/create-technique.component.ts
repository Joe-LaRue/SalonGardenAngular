import { Component, OnInit } from '@angular/core';
import { TechniqueDataService } from '../services/techniqueDataService';
import { TechniqueType } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'create-technique',
  templateUrl: './create-technique.component.html'
})
export class CreateTechniqueComponent implements OnInit {

  techniqueTypes : TechniqueType[];
  description: string;
  techniqueTypeId : number;

  constructor(private techniqueDataService: TechniqueDataService, private router: Router) { }

  ngOnInit() {
    this.techniqueTypes = this.techniqueDataService.getTechniqueTypes();
  }

  createTechnique(){
    this.techniqueDataService.createTechnique(this.description, this.techniqueTypeId);
    this.router.navigate(['/', 'techniques']);
  }

}
