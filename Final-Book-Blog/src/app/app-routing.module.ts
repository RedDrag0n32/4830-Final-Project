import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyLibraryComponent } from "./body-library/body-library.component";
import { BodyAddBookComponent } from "./body-add-book/body-add-book.component"

const routes: Routes = [
  {
    path:'', component: BodyLibraryComponent
  },
  {
    path:'add-book', component: BodyAddBookComponent
  }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
