import { Component, OnInit } from '@angular/core';
import { PostBlogService } from '../_services/postBlog/post-blog.service';

class Blog {
  title: String;
  name: String;
  content: String;
}

interface ServerResponse {
  type: boolean;
  data: any;
}

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {
  blog: Blog;

  constructor(public postBlog: PostBlogService) { }

  ngOnInit(): void {
      this.blog = new Blog();
    }

    onSubmit() {
      if(this.blog.title && this.blog.name && this.blog.content){
        console.log(this.blog)
        this.postBlog.postBlog(this.blog)
        .subscribe((res: ServerResponse) => {
          console.log(res)
          alert('Blog Uploaded!')
        })
        this.ngOnInit()
      } else {
        alert('Fill out everything!')
      }
    }

  }
