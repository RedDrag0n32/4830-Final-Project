import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../post.model';

@Component({
  selector: 'app-body-add-book',
  templateUrl: './body-add-book.component.html',
  styleUrls: ['./body-add-book.component.css']
})
export class BodyAddBookComponent {


  constructor(public service: BookServiceService) {

   }

  //public book: Book[]

   addLibrary(form: NgForm){
    this.service.addLibrary(form.value.title, form.value.author, form.value.genre)
    form.resetForm()
   }

}

