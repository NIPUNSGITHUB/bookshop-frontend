import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Book } from 'src/app/models/book';
import { Origin } from 'src/app/models/origin';
import { User } from 'src/app/models/user';
import { ValidationRules } from 'src/app/models/validation-rules';
import { BookService } from 'src/app/services/book/book.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  origin = new Origin
  book = new Book;
  user = new User
  authorList = [];

  constructor(private bookService: BookService, private userService: UserService, private formBuilder: FormBuilder, private validationRules: ValidationRules,) { }

  file: any;
  ngOnInit(): void {
    this.getAllAuthors();
    this.user.isAdmin = sessionStorage.getItem('isAdmin') as any;
    this.user.isAdmin == 1 ? this.book.userId = 0 : this.book.userId = sessionStorage.getItem('userId') as any
  }

  createBookForm = this.formBuilder.group({
    userId: ['', [Validators.required]],
    title: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.maxLength(100)]],
  });

  get userId() {
    return this.createBookForm.get('userId');
  }

  get title() {
    return this.createBookForm.get('title');
  }

  get price() {
    return this.createBookForm.get('price');
  }

  get image() {
    return this.createBookForm.get('image');
  }

  get description() {
    return this.createBookForm.get('description');
  }



  onFileSelected(event: any) {
    this.file = event.target.files[0]
  }

  /**
   * Create Book
   * API: api/book/create
   */
  async addBook() {
    this.origin._API = this.origin._BASEURL + "api/book/create";
    var myFormData = new FormData();
    myFormData.append('userId', this.book.userId as any);
    myFormData.append('isAdmin', sessionStorage.getItem('isAdmin') as any);
    myFormData.append('title', this.book.title);
    myFormData.append('description', this.book.description);
    myFormData.append('price', this.book.price as any);
    myFormData.append('image', this.file, this.file.name);

    (await this.bookService.createBook(this.origin._API, myFormData)).subscribe(async (response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          var result = response.body as any;
          alert(result.message);
        }
      }

    }, error => {
      alert(error.error['data'].title);
    });
  }

  /**
   * Get all authors
   * API:api/author/list
   */
  async getAllAuthors() {
    (await this.userService.getAllAuthors()).subscribe((response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          var result = response.body as any;
          this.authorList = result.success;

        }
      }

    }, error => {
      alert(error.error['data'].title);
    });
  }

  /**
   * Get all authors
   * API:api/author/list
  */
  async getBooksByAuthor() {
    (await this.bookService.getAllBooksByAuthor(this.book.userId, this.user.isAdmin)).subscribe((response) => {
      if (response.status == 200) {
        if (response.body != null || response.body != undefined) {
          var result = response.body as any;
          this.book.bookList = result.success;
        }
      }

    }, error => {
      alert(error.error['data'].title);
    });
  };

  /**
   * Delete Book
   * API: api/book/delete/2
  */
  onBookDelete(bookId: number) {
    var r = confirm("Press a button!");
    if (r == true) {
      (this.bookService.onBookDelete(bookId)).subscribe((response) => {
        if (response.status == 200) {
          if (response.body != null || response.body != undefined) {
            var result = response.body as any;
            alert(result.message);
            this.getBooksByAuthor();
          }
        }

      }, error => {
        alert(error.error['data'].title);
      });
    }
  }


}
