import { PropertyWrite } from '@angular/compiler';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';

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
  postEditing: Post;

  constructor(private postService: PostServiceService) { }

  addPost(post: Post) {
    this.postService.addPost(post).subscribe(post => this.posts.unshift(post));
  }

  getPosts() {
    this.postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  crudEdit(post: Post) {
    this.postService.editPost(this.postEditing._id, post).subscribe();
    this.postEditing = null;
    
  }

  modifPost(post: Post) {
    if (this.postEditing == null) {
      this.addPost(post);
    }
    else {
      this.crudEdit(post);
      location.reload();
    }
  }

  editPost(post: Post) {
    this.postEditing = post;
  }

  deletePost(post: Post) {
    this.postService.deletePost(post._id).subscribe();
    this.posts.splice(this.posts.indexOf(post, 0), 1);
  }

  ngOnInit(): void {
    this.getPosts();
    console.log("posts > ", this.posts);
  }
}
