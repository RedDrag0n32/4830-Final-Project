import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-body-library',
  templateUrl: './body-library.component.html',
  styleUrls: ['./body-library.component.css']
})
export class BodyLibraryComponent implements OnInit {

  public library: Book[] = []
  constructor(public service: BookServiceService){

  }



  ngOnInit(){
    this.library = this.service.getLibrary()
  }
}
