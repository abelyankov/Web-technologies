import { EventEmitter, Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import { Ipost} from '../app/ipost';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }
  public sendMessage = new EventEmitter<string>();

  getPosts(): Promise<Ipost[]> {
    return this.get('http://127.0.0.1:8000/api/posts', {});
  }

  getPostDetail(id: number): Promise<Ipost> {
    return this.get(`http://127.0.0.1:8000/api/posts${id}/`, {});
  }

  createPost(title: any, body: any): Promise<Ipost> {
    return this.post('http://127.0.0.1:8000/api/posts', {
      title, body,
    });
  }
  updatePost(post: Ipost) {
    return this.put(`http://127.0.0.1:8000/api/posts/${post.id}/`, {
      title: post.title
    });
  }

  deletePost(id: number): Promise<any> {
    return this.delet(`http://127.0.0.1:8000/api/posts/${id}/`, {
    });
  }
}
