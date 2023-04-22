import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyLibraryComponent } from "./body-library/body-library.component";
import { BodyAddBookComponent } from "./body-add-book/body-add-book.component"
import { BodyWishListComponent } from "./body-wish-list/body-wish-list.component";

//I added the wish list and made it to where the add book was the default
const routes: Routes = [
  {
    path:'', component: BodyAddBookComponent
  },
  {
    path:'library', component: BodyLibraryComponent
  },
  {
    path:'wish-list', component: BodyWishListComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
