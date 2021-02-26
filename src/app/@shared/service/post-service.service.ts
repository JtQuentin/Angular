import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

const postUrl = 'https://crudcrud.com/api/ee51a588488840618ee68d5849846478/posts';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>(postUrl);
  }

  addPost(post: Post) {
    return this.http.post<Post>(postUrl, post);
  }

  deletePost(postId: string) {
    return this.http.delete<Post>(postUrl + `/${postId}`);
  }

  editPost(postId: string, postEdited: Post) {
    delete postEdited._id;
    return this.http.put<Post>(postUrl + `/${postId}`, postEdited);
  }

}
