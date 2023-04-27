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


  addLibrary(title:string, author:string){
    console.log("addLibrary(): " + title + " " + author)
    const book: Book = {id: null, title: title, author: author}
    this.http.post<{title:string, author:string}>('http://localhost:3000/api/library',book).
    subscribe((libraryData)=>{
      this.library.push(book)
    });
  }

  getLibrary(){ // creates connection to app.js
    this.http.get<{message: string, library: Book[]}>('http://localhost:3000/api/library').
    subscribe((libraryData)=>{
      this.library = libraryData.library;
    });
    return this.library
  }

  addWishList(title: string, author: string){
    const book: Book = {id: null, title: title, author: author}
    this.library.push(book);
  }

  getWishList(){
    return this.wishList
  }
}
