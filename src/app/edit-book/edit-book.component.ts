import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  title: string = "Modifica libro";

  constructor(public service: BookService) { }

  ngOnInit(): void {
  }


  save(): void {
    this.service.booktoShow = null;
    this.service.saveBooksInLocalStorage();
  }

}
