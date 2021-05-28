export class User {
    id: number;
    name: string;
    email: string;
    isAdmin: number;
    password: string;
    isActive: number;
    token: any;
    isLoggedIn = false;
    userList = null;


    constructor() {
        this.id = 1;
        this.name = "";
        this.token = '';
        this.email = "admin@gmail.com";
        this.password = "123456";
        this.isAdmin = 0;
        this.isActive = 0;
    }

}
