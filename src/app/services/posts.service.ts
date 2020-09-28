import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { catchError, delay } from 'rxjs/operators';

import { Post, requestError } from './interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [];
  loading: boolean = true;
  error: requestError = null;

  constructor(private http: HttpClient) {}

  fetchPosts = (limit: number = 10) => {
    const headers = new HttpHeaders({
        MyHeader: Math.random().toFixed(1),
      }),
      params = new HttpParams()
        .set('_limit', limit.toString())
        .set('myParam', '1337');

    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        headers,
        params,
      })
      .pipe(delay(1500))
      .subscribe(
        (posts) => {
          this.posts = posts;
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.error = error.message;
        }
      );
  };

  createPost = (newPost: Post) => {
    this.http
      .post<Post>('https://jsonplaceholder.typicode.com/posts', newPost)
      .subscribe((resp) => this.posts.unshift(resp));
  };

  removePost = (postId: number) => {
    this.http
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .subscribe(() => {
        const postIndex = this.posts.findIndex((post) => post.id === postId);
        this.posts.splice(postIndex, 1);
        alert(`Пост с id: ${postId} удален`);
      });
  };

  fetchPost = (postId: string): Observable<Post> => { 
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  findPost = (postId: number): Post => { 
    const post = this.posts.find((post) => post.id === postId);
    if (post) {
      return post
    } else { 
      return {
        title: 'Пост не загружен =(',
        body: 'Сначала необходимо зайти на страницу server!'
      }
    }
  };
}
