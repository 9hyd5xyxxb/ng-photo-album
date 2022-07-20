import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClent: HttpClient) { }
  // - https://jsonplaceholder.typicode.com/posts/ to the list of posts.
  getPosts() {
    return this.httpClent.get(`${environment.apiUrl}/posts`);
  }

  // - https://jsonplaceholder.typicode.com/posts/1/ to the details of post with ID 1.
  getPost(id: number) {
    return this.httpClent.get(`${environment.apiUrl}/posts/${id}`);
  }

  // - https://jsonplaceholder.typicode.com/albums/ to get list of albums.
  getAlbums() {
    return this.httpClent.get(`${environment.apiUrl}/albums`);
  }

  // - https://jsonplaceholder.typicode.com/albums/1/ to get details of album with ID 1.
  getAlbum(id: number) {
    return this.httpClent.get(`${environment.apiUrl}/albums/${id}`);
  }

  // - https://jsonplaceholder.typicode.com/photos/ to get list of photos.
  getPhotos() {
    return this.httpClent.get(`${environment.apiUrl}/photos`);
  }

  // - https://jsonplaceholder.typicode.com/photos/1/ to get details of photo with ID 1.
  getPhoto(id: number) {
    return this.httpClent.get(`${environment.apiUrl}/photos/${id}`);
  }

  // - https://jsonplaceholder.typicode.com/users/1/ to get details of user with ID 1.
  getUser(id: number) {
    return this.httpClent.get(`${environment.apiUrl}/users/${id}`);
  }
}
