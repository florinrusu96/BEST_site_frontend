import { PartnersPageComponent } from './partners-page/partners-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { EventPageComponent } from './event-page/event-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { InternationalPageComponent } from './international-page/international-page.component';

const routes: Routes = [
  {path: 'blog-page', component: BlogPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'event-page', component: EventsPageComponent},
  {path: 'events/:id', component: EventPageComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'story-page', component: StoryPageComponent},
  {path: 'partners-page', component: PartnersPageComponent},
  {path: 'international-page', component: InternationalPageComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
