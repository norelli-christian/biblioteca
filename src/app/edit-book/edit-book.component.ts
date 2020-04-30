import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  
  title: string = "Modifica libro";

  constructor(public bookService: BookService,
              private localStorage:LocalStorageService
    )  { }

  ngOnInit(): void {
  }


  save(): void {
    this.bookService.save2();
    //this.bookService.selectedBook = this.localStorage.store('books',this.bookService.selectedBook)
    this.bookService.selectedBook = null;
  }

}
