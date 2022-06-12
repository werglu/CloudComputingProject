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
        return this.http.get<Post[]>(environment.apiBaseUrl + 'posts');
    }

    getPost(id: string): Observable<Post> {
        return this.http.get<Post>(environment.apiBaseUrl + `posts/${id}`);
    }

    addPost(post: Post): Observable<Post> {
        return this.http.post<Post>(environment.apiBaseUrl + 'posts/', post);
    }

    editPost(id: string, post: Post){
        return this.http.put(environment.apiBaseUrl + `posts/${id}`, post);
    }

    deletePost(id: string) {
        return this.http.delete(environment.apiBaseUrl + `posts/${id}`);
    }
}