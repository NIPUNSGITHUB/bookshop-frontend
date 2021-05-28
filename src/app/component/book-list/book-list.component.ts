import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { User } from 'src/app/models/user';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  aaa = '';
  user = new User
  book = new Book
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
   
    this.getAllBooks();
  }

  /**
    * Get all authors
    * API:api/book/list
  */
  async getAllBooks() {
    (await this.bookService.getAllBooks()).subscribe((response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          var result = response.body as any;
          this.book.bookList = result;
        }
      }

    }, error => {
      alert(error.error['data'].title);
    });
  }



}
