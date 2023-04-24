import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../post.model';
import {FormControl} from '@angular/forms';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';

@Component({
  selector: 'app-body-add-book',
  templateUrl: './body-add-book.component.html',
  styleUrls: ['./body-add-book.component.css']
})
export class BodyAddBookComponent {


  constructor(public service: BookServiceService) {

   }

  //Genres array, lists out genres within the forms
   genres = new FormControl();
   genreList: string[] = [
    "Action & Adventure",
    "Biography",
    "Children's",
    "Classic",
    "Comic Book",
    "Cook Book",
    "Crime",
    "Drama",
    "Graphic Novel",
    "Guide",
    "Health/Fitness",
    "History",
    "Historical Fiction",
    "Horror",
    "Mystery",
    "Paranormal",
    "Poetry",
    "Religious/Spiritual",
    "Romance",
    "Self Help",
    "Science Fiction",
    "Textbook",
    "Thriller",
    "True Crime",
    "Young Adult"
  ];

  //This is to see if the series check box is clicked
  series = true

  //public book: Book[]

   addLibrary(form: NgForm){
    //this.service.addLibrary(form.value.title, form.value.author, form.value.genre)
    this.series = form.value.series
    form.resetForm()
   }

}

