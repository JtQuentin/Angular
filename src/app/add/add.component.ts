import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Post } from '../@shared/models/post';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() addPostEvent = new EventEmitter<Post>();

  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl(''),
  });

  addNewPost(){
    this.addPostEvent.emit(this.postForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
