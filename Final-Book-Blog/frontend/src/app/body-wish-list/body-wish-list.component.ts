import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookServiceService } from '../book-service.service';
import { Book } from '../book.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body-wish-list',
  templateUrl: './body-wish-list.component.html',
  styleUrls: ['./body-wish-list.component.css']
})
export class BodyWishListComponent {
  public wishList: Book[] = []
  private wishListSub: Subscription;
  constructor(public service: BookServiceService){

  }



  ngOnInit(){
    this.service.getLibrary();
    this.wishListSub = this.service.getLibraryUpdateListener().subscribe((books: Book[]) =>{
      books.forEach((element) => {
        if(element.tag == "WishList") {
          this.wishList.push(element)
        }
      })
    })
  }

  ngOnDestroy() {
    this.wishListSub.unsubscribe();
  }
}
