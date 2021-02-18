import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    link: new FormControl(''),
  });

  onSubmit(){
    console.log(this.postForm.value);
  }

  submitPost(){
    console.log(this.postForm.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
