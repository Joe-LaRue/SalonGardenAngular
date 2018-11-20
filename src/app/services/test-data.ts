import { Student, TechniqueType, Technique } from "../model";

export function getTestStudents() : Student[]{
    return [{
        id: 1,
        creationDate: new Date('1/1/2018'), 
        email: 'joe@email.com',
        firstName: 'Joe',
        lastName: 'LaRue',
        phase: 1,
        userName: 'jlarue',
        password: 'password'  
      },
      {
        id: 2,
        creationDate: new Date('1/1/2018'),
        email: 'colleen@email.com',
        firstName: 'Colleen',
        lastName: 'LaRue',
        phase: 1,
        userName: 'clarue',
        password: 'password'  
      },
      {
        id: 3,
        creationDate: new Date('1/1/2018'),
        email: 'jj@email.com',
        firstName: 'JJ',
        lastName: 'LaRue',
        phase: 1,
        userName: 'jjlarue',
        password: 'password'  
      },
      {
        id: 1,
        creationDate: new Date('1/1/2018'),
        email: 'jenna@email.com',
        firstName: 'jenna',
        lastName: 'LaRue',
        phase: 1,
        userName: 'jennalarue',
        password: 'password'  
      }];
}

export function getTestTechniqueTypes() : TechniqueType[]{
  return [
    new TechniqueType(1, "Cut"),
    new TechniqueType(2, "Color"),
    new TechniqueType(3, "Style")
  ];
}

export function getTestTechniques() : Technique[]{
  return [
    new Technique(1, "Scissor Over Comb", new TechniqueType(1, "Cut")),
    new Technique(2, "Vertical Foil", new TechniqueType(2, "Color")),
    new Technique(3, "Updo", new TechniqueType(3, "Style"))
  ];
}