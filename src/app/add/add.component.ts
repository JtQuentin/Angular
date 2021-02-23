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

  @Output() addPostEvent = new EventEmitter<Post>();

  postForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    link: new FormControl('', Validators.required),
  });

  createPost(newPost: Post) {
    this.postService.addPost(newPost).subscribe(post => this.addPostEvent.emit(newPost));
    this.postForm.reset();
  }

  addNewPost(){
    const post: Post = {
      id: IdGeneratorUtils.uuidv4(),
      title: this.postForm.get("title").value,
      description: this.postForm.get("description").value,
      link: this.postForm.get("link").value
    }

    this.addPostEvent.emit(post);
    this.postForm.reset();
  }

  constructor(private postService: PostServiceService) { }

  ngOnInit(): void {
  }

}
