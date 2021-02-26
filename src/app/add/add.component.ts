import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Post } from '../@shared/models/post';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';
import { PostServiceService } from '../@shared/service/post-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Input("postEditing") set postEditing(post: Post) {
    if(!post){
      return;
    }
    this.postForm.patchValue({title: post.title, description: post.description, link: post.link});
  }

  @Output() addPostEvent: EventEmitter<Post>;
  @Output() crudEditEvent: EventEmitter<Post>;

  postForm: FormGroup;

  constructor(private postService: PostServiceService) {
    this.addPostEvent = new EventEmitter();
    this.crudEditEvent = new EventEmitter();
    this.createForm();
  }

  ngOnInit(): void {
  }

  addNewPost() {
    const post: Post = {
      title: this.postForm.get("title").value,
      description: this.postForm.get("description").value,
      link: this.postForm.get("link").value
    }

    this.addPostEvent.emit(post);
    this.crudEditEvent.emit(post);
    this.postForm.reset();
  }

  private createForm() {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      link: new FormControl('', Validators.required),
    });
  }
}
