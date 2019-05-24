import {Component, OnInit} from '@angular/core';
import {BackendClientService} from '../backend-client/backend-client.service';
import {BlogPost} from "../models/blog-post";

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  private blogPosts: BlogPost[];

  constructor(private backendClient: BackendClientService) {
  }

  ngOnInit() {
    this.backendClient.listBlogPosts().subscribe(data => console.log(data))
  }

}
