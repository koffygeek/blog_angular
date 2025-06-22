import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment.development';
export interface Post {
  title: string;
  content: string;
  id?: any;
}
@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = `${environment.apiUrl}/api/posts`; // Uncomment and set your API URL if needed
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.apiUrl}`);
  }

  addPost(data: Partial<Post>) {
    return this.http.post<Post>(`${this.apiUrl}`, {});
  }

  updatePost(id: any, data: { content: string }) {
    return this.http.patch<Post>(`${this.apiUrl}`, {});
  }

  deletePost(id: any) {
    return this.http.delete(`${this.apiUrl}`);
  }
}
