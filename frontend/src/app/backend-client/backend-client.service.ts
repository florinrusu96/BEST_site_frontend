import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {catchError} from 'rxjs/operators';
import {BlogPost} from '../models/blog-post';
import {Event} from '../models/events';
import { IContactForm } from '../models/contact-form';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable()
export class BackendClientService {
  private endpoint;

  constructor(
    private toastrService: ToastrService,
    private httpClient: HttpClient,
    private router: Router
  ) {
    // this needs to be properly changed for deployment
    this.endpoint = 'http://localhost:8000/';
  }

  private handleError(toastrService: ToastrService) {
    return (error: any) => {
      console.error(error);
      const message = JSON.stringify(error.error) || error.message;
      toastrService.error(message);
      return throwError(error);
    };
  }

  private get<T>(url: string, params?: any): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + url, {params}).pipe(
      catchError(this.handleError(this.toastrService)));
  }

  private post<T>(url: string, body: T): Observable<T> {
    return this.httpClient.post<T>(this.endpoint + url, body, httpOptions).pipe(
      catchError(this.handleError(this.toastrService)));
  }

  private patch<T>(url: string, body: any | null): Observable<T> {
    return this.httpClient.patch<T>(this.endpoint + url, body).pipe(
      catchError(this.handleError(this.toastrService)));
  }

  private put<T>(url: string, body: any | null): Observable<T> {
    return this.httpClient.put<T>(this.endpoint + url, body).pipe(
      catchError(this.handleError(this.toastrService)));
  }

  private delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(this.endpoint + url).pipe(
      catchError(this.handleError(this.toastrService)));
  }

  // ------ Blog Posts ----

  getBlogPost(blogPostId: string): Observable<BlogPost> {
    return this.get<BlogPost>('blog-posts/' + blogPostId + '/');
  }

  listBlogPosts(params?: object): Observable<BlogPost[]> {
    return this.get<BlogPost[]>('blog-posts/', params);
  }

  createBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.post<BlogPost>('blog-posts/', blogPost);
  }

  deleteBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.delete('blog-posts/' + blogPost.id);
  }

   // ------ Events ----

   getEventList(): Observable<Event[]> {
    return this.get<Event[]>('events/');
   }

   getEvent(eventId: string): Observable<Event> {
    return this.get<Event>('events/' + eventId + '/');
   }

   // ------ ContactForm ----
   sendEmail(contactForm: IContactForm): Observable<IContactForm> {
     return this.post<IContactForm>('forms/', contactForm);
   }
}
