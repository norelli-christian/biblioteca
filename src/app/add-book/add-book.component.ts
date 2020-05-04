import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title: string = "Aggiungi un libro"
  books: Book[];

  constructor(public service: BookService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }


  addBook(): void {
    this.books.push(this.service.selectedBook);
    this.service.localStorage.store('books', this.books);
    this.service.selectedBook =  {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: "",
      coverUrl: "assets/images/images.jpg",
    }
  }




}
