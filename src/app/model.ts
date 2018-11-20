export class Student{
    id: number;
    userName: string;
    creationDate: Date;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    lastLogon?: Date;
    phase: number;    
}

export class Role{
    id: number;
    description: string;
}

export class Technique{
    constructor(public id: number, public description: string, public techniqueType: TechniqueType) {
    }
}

export class TechniqueType{    
    constructor(public id: number, public description: string) {
    }
}