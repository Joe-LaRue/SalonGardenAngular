import { Injectable } from '@angular/core';
import { Technique, TechniqueType } from '../model';
import { getTestTechniques, getTestTechniqueTypes } from './test-data';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class TechniqueDataService {

  techniques: Technique[];
  techniqueTypes : TechniqueType[];

  getTechniques() : Technique[] {
    this.logger.log(`${this.techniques.length} techniques`);
    return this.techniques;
  }

  getTechniqueTypes() : TechniqueType[] {
    return this.techniqueTypes;
  }

  getTechniquesByTypeId(techniqueTypeId : number) : Technique[] {
    return this.techniques.filter(x => x.techniqueType.id === techniqueTypeId);;
  }

  getTechniqueById(id: number) : Technique{
    return this.techniques.find(x => x.id === id);
  }

  addTechnique(technique : Technique){
    this.logger.log(`adding technique to repository`);
    technique.id = this.techniques.length + 1;
    this.techniques.push(technique);
    this.logger.log(`technique repository now has ${this.techniques.length} techniques`);
  }

  addTechniqueType(description : string){
    const newId = this.techniqueTypes.length + 1;
    const techniqueType = new TechniqueType(newId, description);
    this.techniqueTypes.push(techniqueType);
  }

  createTechnique(description: string, techniqueTypeId: number){
    this.logger.log(`adding technique to repository`);
    const techniqueType =this.techniqueTypes.filter(x => x.id == techniqueTypeId)[0];
    const newId = this.techniques.length + 1;

    const technique = new Technique(newId, description, techniqueType);
    this.techniques.push(technique);
    this.logger.log(`technique repository now has ${this.techniques.length} techniques`);
  }

  constructor(private logger : LoggerService) { 
    this.techniques = getTestTechniques();
    this.techniqueTypes = getTestTechniqueTypes();
    this.logger.log(`Initialized ${this.techniques.length} from repository`)
  }
}
