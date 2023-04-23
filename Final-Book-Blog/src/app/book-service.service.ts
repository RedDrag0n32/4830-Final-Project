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
      this.library.push(title, author, genre)
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
