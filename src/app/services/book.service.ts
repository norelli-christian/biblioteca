import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';


const BOOKS: Book[] = [
  
  {
    ISBN: "12425422",
    title: "Piccole donne di Louisa May Alcott",
    author: "Geronimo Stilton",
    publisher: "Piemme",
    publicationDate: "1-12-2017",
    coverUrl: "assets/images/libro3.jpg",
  },


  {
    ISBN: "1251653",
    title: "La grande scommessa",
    author: "Michael Lewis",
    publisher: "Rizzoli",
    publicationDate: "5-05-2015",
    coverUrl: "assets/images/libro2.jpg",
  },


  {
    ISBN: "13624222",
    title: "Seme di strega",
    author: "Margaret Atwood",
    publisher: "Rizzoli",
    publicationDate: "1-05-2000",
    coverUrl: "assets/images/libro1.jpg",
    },


  {
    ISBN: "2362323",
    title: "Dire, fare, brasare. In 11 lezioni e 40 ricette tutte le tecniche per superarsi in cucina",
    author: "Carlo Cracco",
    publisher: "Rizzoli",
    publicationDate: "4-30-2020",
    coverUrl: "assets/images/libro4.jpg",
  }

];



@Injectable({
  providedIn: 'root'
})
export class BookService {
  booktoShow: Book;
  books: Book[];

  selectedBook: Book = {
    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: "",
    coverUrl: "assets/images/images.jpg",
  };

  constructor(public localStorage:LocalStorageService) { }

  getBooks(): Book[]{
    this.books = this.localStorage.retrieve('books') || BOOKS;
    return this.books;
  }


  saveBooksInLocalStorage(){
    this.localStorage.store('books', this.books);
  }
  

}
