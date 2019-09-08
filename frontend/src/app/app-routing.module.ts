import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogPageComponent} from './blog-page/blog-page.component';
import { EventPageComponent } from './event-page/event-page.component';

const routes: Routes = [
  {path: 'blog-page', component: BlogPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'events/:id', component: EventPageComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
