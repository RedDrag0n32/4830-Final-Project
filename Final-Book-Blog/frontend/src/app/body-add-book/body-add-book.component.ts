import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book.model';
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
   genreSelect: string[] = []

  //public book: Book[]

   onAddLibrary(form: NgForm){
    console.log(this.genres.value)
    this.genreSelect.push(form.value.genre)
    this.service.AddLibrary(
      form.value.title,
      form.value.author,
      this.genreSelect,
      form.value.series,
      form.value.seriesTitle,
      form.value.status,
      form.value.notes,
      form.value.tag
      )
    form.resetForm()
   }

}

