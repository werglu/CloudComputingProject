import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { environment } from '../environments/environment.prod';

@Injectable({
    providedIn: 'root',
})
export class PostService {

    constructor(public http: HttpClient) {
    }

    getAllPosts(): Observable<Post[]> {
        var baseUrl: string = '/';//environment.apiBaseUrl;
        return this.http.get<Post[]>(baseUrl + 'api/post');
    }

    getPost(id: number): Observable<Post> {
        var baseUrl: string = '/';//environment.apiBaseUrl;
        return this.http.get<Post>(baseUrl + `api/post/${id}`);
    }

    public addPost(post: Post): Observable<Post> {
        var baseUrl: string = '';//environment.apiBaseUrl;
        return this.http.post<Post>(baseUrl + 'api/post/', post);
    }

    public editPost(id: number, post: Post){
        var baseUrl: string = '';//environment.apiBaseUrl;
        return this.http.put(baseUrl + `api/post/${id}`, post);
    }

    deletePost(id: number) {
        var baseUrl: string = '';//environment.apiBaseUrl;
        return this.http.delete(baseUrl + `api/post/${id}`);
    }
}