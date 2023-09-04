import { Component } from '@angular/core';
import { IBlogs } from 'src/app/shared/model/blogs';
import { PostsService } from 'src/app/shared/services/posts.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.css']
})
export class ListBlogsComponent {
  constructor(private postService: PostsService) { }
  blogs!: IBlogs[]
  ngOnInit(): void {
    this.postService.getAllBlogs().subscribe(
      (data: IBlogs[]) => {
        this.blogs = data
      }
    )
  }
}
