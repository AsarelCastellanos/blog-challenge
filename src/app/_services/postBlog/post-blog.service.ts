import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../httpBaseUrl/httpBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class PostBlogService {

  constructor(public http: HttpClient) { }

    postBlog(payload) {
    const endPoint = baseUrl + '/postBlog';
    return this.http.post(endPoint, payload);
  }
}
