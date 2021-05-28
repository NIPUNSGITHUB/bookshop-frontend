export class Book {
    id: number;
    userId: number;
    title: string;
    description: string;
    price: number;
    image: any;
    isActive: number;
    bookList = null;

    constructor() {
        this.id = 0;
        this.userId = 0;
        this.title = '';
        this.description = '';
        this.price = 0;
        this.image = null;
        this.isActive = 1;
    }

}
