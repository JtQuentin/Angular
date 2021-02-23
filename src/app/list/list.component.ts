import { Component, Input, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';
import { PostServiceService } from '../@shared/service/post-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[]; // = POSTS;

  constructor(private postService: PostServiceService) { }

  addPost(newPost: Post){
    this.posts.unshift(newPost);
  }

  getPosts(){
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  

  ngOnInit(): void {
    this.getPosts();
    console.log("posts > ", this.posts);
  }

}
