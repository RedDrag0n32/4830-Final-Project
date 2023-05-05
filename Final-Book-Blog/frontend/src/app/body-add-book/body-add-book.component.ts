import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book.model';
import {FormControl} from '@angular/forms';
import {MatChipEditedEvent, MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-body-add-book',
  templateUrl: './body-add-book.component.html',
  styleUrls: ['./body-add-book.component.css']
})
export class BodyAddBookComponent {


  constructor(public service: BookServiceService, public fb: FormBuilder) {

   }

  //Button clicked trigger variable
  clicked = 0;

  onFailClick(){
    this.clicked = this.clicked + 1;
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
    "Fantasy",
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

  bookForm: any;
  status: string

  ngOnInit(){
    // this.bookForm = this.fb.group({
    //   status: ['Unread', [Validators.required]]
    // })
      this.status = "Unread"

  }

   onAddLibrary(form: NgForm){
    //this.genreSelect.push(this.genres.value)
    if (form.invalid) {
      return;
    }
    // if(!form.hasError){
    //   this.clicked = 0;
    // }
    if(!form.value.series){
      form.value.series = false;
    }
    // if(this.clicked > 0){
    //   console.log("printed")
    //   return;
    // }

    this.genreSelect.push(this.genres.value)
    console.log(this.genres.value)
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
      console.log(form.value.status)
    form.resetForm()
    this.clicked = 0;
    this.genres.reset()

   }

}

