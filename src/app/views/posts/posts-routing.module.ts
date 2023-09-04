import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {
    path: '',
    component: ListBlogsComponent
  },
  {
    path: 'add',
    component: AddBlogComponent
  },
  {
    path: 'view',
    component: ViewBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
