import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

  const postUrl = 'https://crudcrud.com/api/1d42ca9ec8fa40199014c5022cd444ce/posts';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any>{
    return this.http.get<Post>(postUrl);
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>(postUrl, post);
  }

  
}
