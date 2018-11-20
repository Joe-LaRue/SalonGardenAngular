import { Component, OnInit } from '@angular/core';
import { Technique } from '../model';
import { TechniqueDataService } from '../services/techniqueDataService';

@Component({
  selector: 'app-technique-list',
  templateUrl: './technique-list.component.html',
  styles: []
})
export class TechniqueListComponent implements OnInit {

  techniques: Technique[];
  constructor(private techniqueDataService : TechniqueDataService) { }

  ngOnInit() {
    this.techniques = this.techniqueDataService.getTechniques();
  }

}
