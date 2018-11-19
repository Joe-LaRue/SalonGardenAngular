import { Student } from "../model";

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