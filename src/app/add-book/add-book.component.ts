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

  errorISBN :String = '';
  errorTitle: String = '';
  errorAuthor: String ='';
  errorPublisher: String = '';
  errorPublicationDate: String = '';
  
  constructor(public service: BookService) { }

  ngOnInit(): void {
    this.books = this.service.getBooks();
  }
  
  reset():void{
    this.service.selectedBook =  {
      ISBN: "",
      title: "",
      author: "",
      publisher: "",
      publicationDate: "",
      coverUrl: "assets/images/images.jpg"
  }
}

  addBook(): void {
    let result = true;
    if(this.service.selectedBook.ISBN.length != 13){
      this.errorISBN = "L'isbn deve essere di 13 cifre";
      result = false;
    }else if(!(/^\d+$/.test(this.service.selectedBook.ISBN))){
      this.errorISBN = "L'isbn può contenere solo numeri";
      result = false;
    }
    
    if(this.service.selectedBook.title.length == 0){
      this.errorTitle = "Il campo titolo non può essere vuoto";
      result = false;
    }
    if(this.service.selectedBook.author.length == 0){
      this.errorAuthor = "Il campo autore non può essere vuoto";
      result = false;
    }
    if(this.service.selectedBook.publisher.length == 0){
      this.errorPublisher = "Il campo editore non può essere vuoto";
      result = false;
    }
    if(this.service.selectedBook.publicationDate.length == 0){
      this.errorPublicationDate = "Il campo data non può essere vuoto";
      result = false;
    }
    
    if(result){
      this.books.push(this.service.selectedBook);
      this.service.localStorage.store('books', this.books);
      this.reset();
      }
    }
  }
