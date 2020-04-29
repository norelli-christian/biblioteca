import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of } from 'rxjs';

let BOOKS: Book[] = [
  {
    ISBN:"A-0010-Z",
    title:"La donna dei fiori di carta",
    author:"Donato Carrisi",
    publisher: "TEA",
    publicationDate: new Date("Dec 08 2019"),
    coverUrl:"assets/images/adobe-spark.png"
  },
  {
    ISBN:"A-0020-Z",
    title:"La signora del martedì",
    author:"Massimo Carlotto",
    publisher:"E/O",
    publicationDate: new Date("Gen 22 2020"),
    coverUrl:"assets/images/Alis_sisu.256.292591.jpg"
  },
  {
    ISBN:"A-0030-Z",
    title:"La casa delle voci",
    author:"Donato Carrisi",
    publisher:"Longanesi",
    publicationDate: new Date("Dec 11 2019"),
    coverUrl:"https://via.placeholder.com/150?text=Book+cover"
  },
  {
    ISBN:"A-0030-Z",
    title:"La misura del tempo",
    author:"Gianrico Carofiglio",
    publisher:"Einaudi",
    publicationDate: new Date("Nov 05 2019"),
    coverUrl:"https://via.placeholder.com/150?text=Book+cover"
  }
]

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }
  selectedBook: Book = {
    ISBN: "",
    title: "",
    author: "",
    publisher: "",
    publicationDate: new Date(),
    coverUrl: "assets/images/Alis_sisu.256.292591.jpg",
  };
  /*addBook(): Book {
    
    this.books.push(this.newBook);

       this.newBook ={
        ISBN:"",
        title:"",
        author:"",
        publisher: "",
        publicationDate: null,
        coverUrl:""
      
  }
}*/
  

newBook: Book = {
  ISBN: "",
  title: "",
  author: "",
  publisher: "",
  publicationDate: new Date(),
  coverUrl: "assets/images/Alis_sisu.256.292591.jpg"
};

  getBooks(): Book[] {
    return BOOKS}

  
}
