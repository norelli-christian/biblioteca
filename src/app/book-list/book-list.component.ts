import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title:string = "Lista libri";
  books: Book[];
  

  constructor(public bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }
  selectThisBook(book: Book): void{
    this.bookService.bookED = book;
  }


  editBook(book: Book): void {
    this.bookService.bookED = book;
  }
}
