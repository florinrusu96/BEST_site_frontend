import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogPageComponent} from "./blog-page/blog-page.component";

const routes: Routes = [
  {path: 'blog-page', component: BlogPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
