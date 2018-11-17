export class Student{
    id: number;
    userName: string;
    creationDate: Date;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    lastLogon?: Date;
    roleId: number;    
}

export class Role{
    id: number;
    description: string;
}

export class Technique{
    id: number;
    description: string;
    techniqueType: TechniqueType;
}

export class TechniqueType{
    id: number;
    description: string;
}