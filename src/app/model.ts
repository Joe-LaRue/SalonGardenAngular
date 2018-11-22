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

export class Grade{
    constructor(
        public id: number, 
        public student: Student, 
        public technique: Technique, 
        public gradeType : Grade_Type,
        public score: number, 
        public notes: string,         
        public date: Date,
        public phase: number,
        public evaluation? : Evaluation
        ){
    }
}

export class Grade_Type{
    constructor(public id:number, public description: string){

    }
}

export class Evaluation{
    constructor(
        public date: Date,
        public eval_Type: Eval_Type,
        public gradeType: Grade_Type,
        public id: number,        
        public guest_Name: string,
        public notes: string,
        public phase: number,
        public status: string,
        public student: Student,
        public techniqueType: TechniqueType
    
    ){

    }
}

export class Eval_Type{
    constructor(
        public id: number,
        public description: string
    ){}
}