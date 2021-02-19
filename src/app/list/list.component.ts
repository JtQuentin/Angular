import { Component, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[] = POSTS;

  addPost(newPost: Post){
    this.posts.unshift(newPost);
  }

  constructor() { }

  ngOnInit(): void {
    console.log("posts > ", this.posts);
  }

}
