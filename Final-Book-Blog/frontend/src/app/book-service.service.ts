import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http: HttpClient) { }

  private library: Book[] = []
  private libraryUpDate = new Subject<Book[]>()
  wishList = []


  AddLibrary(title:string, author:string){//adds book to database
    console.log("addLibrary(): " + title + " " + author)
    const book: Book = {id: null, title: title, author: author}
    this.http.post<{title:string, author:string}>('http://localhost:3000/api/library',book).
    subscribe((libraryData)=>{
      this.library.push(book)
      this.libraryUpDate.next([...this.library])
    });
  }

  getLibrary(){ // creates connection to app.js
    this.http.get<{message: string, books: Book[]}>('http://localhost:3000/api/library').
    subscribe((libraryData)=>{
      this.library = libraryData.books;
      this.libraryUpDate.next([...this.library])
    });
    //return this.library
  }

  getLibraryUpdateListener(){
    return this.libraryUpDate.asObservable();
  }

  addWishList(title: string, author: string){
    const book: Book = {id: null, title: title, author: author}
    this.library.push(book);
  }

  getWishList(){
    return this.wishList
  }

  // deleteLibrary(bookId:string){
  //   this.http.delete("http://localhost:3000/api/library/"+postId).subscribe(()=>{
  //     const updatedPost = this.posts.filter(post => post.id !==postId) // look for id, if there, remove that post and update array
  //     this.posts = updatedPost
  //     this.postUpDate.next([...this.posts])
  //   })
  // }
}
