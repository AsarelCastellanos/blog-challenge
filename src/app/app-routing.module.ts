import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { PostBlogComponent } from './post-blog/post-blog.component';


const routes: Routes = [
  {
    path: 'view-blog',
    component: ViewBlogComponent
  },
  {
    path: 'post-blog',
    component: PostBlogComponent
  },
  {
    path: '',
    redirectTo: 'view-blog',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'view-blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
