import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
    providedIn: 'root',
})
export class FileService {
    private bucketUrl: string
    constructor(public http: HttpClient) {
        this.bucketUrl = environment.apiBaseUrl + environment.bucketName + '/';
    }


    getFile(filename: string): Observable<Blob> {
        return this.http.get(this.bucketUrl + filename, { responseType: 'blob' });
    }

    addFile(file: File, key: string) {
        return this.http.put(this.bucketUrl + key, file);
    }
}