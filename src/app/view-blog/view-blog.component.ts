import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { GetBlogService } from '../_services/getBlog/get-blog.service';
import { baseUrl } from '../_services/httpBaseUrl/httpBaseUrl';

class Blog {
  title: String;
  name: String;
  content: String;
}

interface BlogInterface {
  title: String;
  name: String;
  content: String;
}

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {
  public blogs: Blog

  constructor(private http: HttpClient, public getBlog: GetBlogService) { }

  ngOnInit(): void {
    this.getBlogs()
  }

  getBlogs() {
    this.http.get(baseUrl +'/postBlog').subscribe((data: BlogInterface) => {
      this.blogs = data;
      console.log(this.blogs)
    })
  }

}
