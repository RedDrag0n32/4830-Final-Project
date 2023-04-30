import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body-library',
  templateUrl: './body-library.component.html',
  styleUrls: ['./body-library.component.css']
})
export class BodyLibraryComponent implements OnInit {

  public library: Book[] = []
  private librarySub: Subscription;
  constructor(public service: BookServiceService){

  }



  ngOnInit(){
    this.service.getLibrary();
    this.librarySub = this.service.getLibraryUpdateListener().subscribe((books: Book[]) =>{
      this.library = books;
    })
  }

  ngOnDestroy() {
    this.librarySub.unsubscribe();
  }
}
