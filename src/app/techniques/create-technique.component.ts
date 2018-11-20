import { Component, OnInit } from '@angular/core';
import { TechniqueDataService } from '../services/techniqueDataService';
import { TechniqueType } from '../model';

@Component({
  selector: 'create-technique',
  templateUrl: './create-technique.component.html'
})
export class CreateTechniqueComponent implements OnInit {

  techniqueTypes : TechniqueType[];
  description: string;
  techniqueTypeId : number;

  constructor(private techniqueDataService: TechniqueDataService) { }

  ngOnInit() {
    this.techniqueTypes = this.techniqueDataService.getTechniqueTypes();
  }

  createTechnique(){
    console.log(this.description);
    console.log(this.techniqueTypeId);
  }

}
