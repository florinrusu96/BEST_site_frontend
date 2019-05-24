import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogPostComponent } from './blog-page/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    BlogPageComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
