import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from '../httpBaseUrl/httpBaseUrl';

@Injectable({
  providedIn: 'root'
})
export class GetBlogService {

  constructor(public http: HttpClient) { }

  blogPost(payload) {
    const endPoint = baseUrl + '/postBlog';
    return this.http.post(endPoint, payload);
  }
}
