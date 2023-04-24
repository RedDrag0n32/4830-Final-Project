import { Injectable } from '@angular/core';
import { Book } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
    public library: Book[]
    wishList = []


    addLibrary(title:string, author:string, genre:string){
      // const book: Book = {title: title, author: author, genre: genre}
      // this.library.push(book)
    }

    getLibrary(){
      return this.library
    }


    addWishList(){

    }

    getWishList(){
      return this.wishList
    }
}
