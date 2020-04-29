import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title = "Aggiungi libro";
  newBook: Book;

  constructor(public bookService: BookService) { }
  
  ngOnInit(): void {
      this.newBook = {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: new Date(),
      coverUrl: ""
    }
  };
  add() {
    this.bookService.addBook(this.newBook);
    this.newBook = {
    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: new Date(),
    coverUrl: ""
  }

  
}

}
