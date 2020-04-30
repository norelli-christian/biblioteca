import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  title = "Aggiungi libro";
  books: Book[];
  constructor(public bookService: BookService,
              private localStorage:LocalStorageService
              ) 
              { }
  
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  };
  add() :void{
    this.books.push(this.bookService.newBook); 
    this.books = this.localStorage.store('books',this.books); 
    this.bookService.newBook = {
    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: new Date(),
    coverUrl: "assets/images/Alis_sisu.256.292591.jpg"
  }

  
}

}

