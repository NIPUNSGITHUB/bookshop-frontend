import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Origin } from 'src/app/models/origin';
import { NetworkService } from '../network.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  origin = new Origin
  book = new Book
  constructor(private networkService: NetworkService) { }

  /* Create Book Api
     URL:/book/create
     USER:userId(athor)/title/description/price
  */
  async createBook(url: string, book: any) {
    return this.networkService.postDB(url, book);
  }
  
  /**
    * Get all authors
    * API:api/book/list
  */
  getAllBooks() {
    this.origin._API = this.origin._BASEURL + 'api/book/list';
    return this.networkService.getDB(this.origin._API);

  }

  /**
    * Get all authors
    * API:api/author/list
  */
  async getAllBooksByAuthor(userId: number, isAdmin: number) {
    this.origin._API = this.origin._BASEURL + 'api/book/list/author/' + userId + '/' + isAdmin;
    return this.networkService.getDB(this.origin._API);
  }

  /**
   * Delete Book
   * API: api/book/delete/2
   */
  onBookDelete(bookId: number) {
    this.origin._API = this.origin._BASEURL + 'api/book/delete/' + bookId;
    return this.networkService.deleteDB(this.origin._API);
  }


}
