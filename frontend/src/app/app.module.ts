import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {MatListModule} from '@angular/material/list'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { BecomePartnerComponent } from './become-partner/become-partner.component';
import { EventPageComponent } from './event-page/event-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';

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
    FooterComponent,

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
  ],
  providers: [
    BackendClientService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
