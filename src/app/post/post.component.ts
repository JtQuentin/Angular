import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  collapsed: boolean;

  @Input() post : Post;

  posts = [];

  addPost(newPost: Post){
    this.posts.push(newPost);
  }

  constructor() {}

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}
