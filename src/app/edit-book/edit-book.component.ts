import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  title: string = "Modifica libro";

  errorISBN :String = '';
  errorTitle: String = '';
  errorAuthor: String ='';
  errorPublisher: String = '';
  errorPublicationDate: String = '';

  constructor(public service: BookService) { }

  ngOnInit(): void {
  }


  save(): void {
    let result = true;
    if(this.service.booktoShow.ISBN.length != 13){
      this.errorISBN = "L'isbn deve essere di 13 cifre";
      result = false;
    }
    
    if(this.service.booktoShow.title.length == 0){
      this.errorTitle = "Il campo titolo non può essere vuoto";
      result = false;
    }
    if(this.service.booktoShow.author.length == 0){
      this.errorAuthor = "Il campo autore non può essere vuoto";
      result = false;
    }
    if(this.service.booktoShow.publisher.length == 0){
      this.errorPublisher = "Il campo editore non può essere vuoto";
      result = false;
    }
    if(this.service.booktoShow.publicationDate.length == 0){
      this.errorPublicationDate = "Il campo data non può essere vuoto";
      result = false;
    }
    console.log(this.service.booktoShow)
    if(result){
      this.service.booktoShow = null;
      this.service.saveBooksInLocalStorage();
    }
    
  }

}
