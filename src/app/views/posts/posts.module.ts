import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddBlogComponent,
    ListBlogsComponent,
    ViewBlogComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
