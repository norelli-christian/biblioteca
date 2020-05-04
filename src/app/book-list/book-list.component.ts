import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title: string = "Elenco Libri";
  books: Book[];
   

  constructor(public service: BookService) { }

  ngOnInit() {
    this.books = this.service.getBooks();
    
    for(let book of this.books){
    }
  }


  selectThisBook(book: Book): void{
    this.service.booktoShow = book;
  }


  editBook(book: Book): void {
    this.service.booktoShow = book;
  }


}
