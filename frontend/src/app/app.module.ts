import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NavigationComponent} from './navigation/navigation.component';
import {BlogPageComponent} from './blog-page/blog-page.component';
import {BlogPostComponent} from './blog-page/blog-post/blog-post.component';
import {BackendClientService} from './backend-client/backend-client.service';
import {ToastrModule} from 'ngx-toastr';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { EventPageComponent } from './event-page/event-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { StoryPageComponent } from './story-page/story-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { EventCardComponent } from './events-page/event-card/event-card.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    BlogPageComponent,
    BlogPostComponent,
    BecomeMemberComponent,
    BecomePartnerComponent,
    EventPageComponent,
    ContactFormComponent,
    FooterComponent,
    StoryPageComponent,
    PageNotFoundComponent,
    EventsPageComponent,
    EventCardComponent,
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  entryComponents: [
    ContactFormComponent,
  ],
  providers: [
    BackendClientService,
    HttpClient,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
