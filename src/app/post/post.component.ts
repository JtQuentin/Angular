import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
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
  @Output() editPostEvent: EventEmitter<Post>
  @Output() deletePostEvent: EventEmitter<Post> 

  constructor() {
    this.editPostEvent = new EventEmitter();
    this.deletePostEvent = new EventEmitter();
  }

  editPost(){
    this.editPostEvent.emit(this.post);
    console.log("J'appuie sur le bouton éditer")
  }

  deletePost(){
    this.deletePostEvent.emit(this.post);
    console.log("J'appuie sur le bouton supprimer")
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    //TODO
  }

  toggle() {

  }

}
