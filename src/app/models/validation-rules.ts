export class ValidationRules {
    email:string;
    mobile:string;
    password:number;
    descriptions:number;

    constructor(){
        this.email = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
        this.mobile = '^[0-9]+$';
        this.password = 6;
        this.descriptions = 200;
    }
 

}
