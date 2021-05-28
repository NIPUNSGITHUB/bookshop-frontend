import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Origin } from 'src/app/models/origin';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() title = '';
  @Input() price = '';
  @Input() author = '';
  @Input() desc = '';
  @Input() image = '';

  origin = new Origin

  constructor() { }

  ngOnInit(): void {


  }

}
