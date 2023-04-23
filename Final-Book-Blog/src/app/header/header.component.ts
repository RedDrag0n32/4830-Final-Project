import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //All functions below change the heading when buttons are clicked
  title = 'Add Book';

  clickAddBookTitle() {
    this.title = "Add Book"
  }
  clickLibraryTitle() {
    this.title = "Library"
  }
  clickWishListTitle() {
    this.title = "Wish List"
  }
}
