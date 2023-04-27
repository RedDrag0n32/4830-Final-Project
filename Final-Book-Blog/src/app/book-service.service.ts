import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  private library: Book[] = []
  wishList = []


  AddLibrary(title:string, author:string){
    // const book: Book = {title: title, author: author, genre: genre}
    // this.library.push(book)
  }

  getLibrary(){ // creates connection to app.js
    this.http.get<{message: string, library: Book[]}>('http://localhost:3000/api/library').
    subscribe((libraryData)=>{
      this.library = libraryData.library;
    });
    return this.library
  }

  addWishList(title: string, author: string){
    const book: Book = {id:null, title: title, author: author}
    this.library.push(book);
  }

  getWishList(){
    return this.wishList
  }
}
