import { Component } from '@angular/core';
import { FileService } from '../file.service';
import { Post } from '../post';
import { PostService } from '../post.service';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public posts: Post[];

    constructor(private postService: PostService, private fileService: FileService) {
        this.postService.getAllPosts().subscribe(p => {
            console.log(p);    
            this.posts = p.sort((p1, p2) => {
                if (p1.createdDate > p2.createdDate) {
                    return -1;
                }
                return 1;
            });
        });
    }

    public delete(post: Post) {
        this.postService.deletePost(post.id).subscribe(x => {
            const index = this.posts.indexOf(post, 0);
            if (index > -1) {
                this.posts.splice(index, 1);
            }
        });
    }

    public downloadFile(post: Post) {
        this.fileService.getFile(post.id).subscribe(
            resp => {
                saveAs(resp, post.filename);
            }, err => {
                console.log('file download failed');
            });
    }
}
