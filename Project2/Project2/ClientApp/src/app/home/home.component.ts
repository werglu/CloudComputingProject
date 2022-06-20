import { Component } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public posts: Post[];

    constructor(private postService: PostService) {
        this.postService.getAllPosts().subscribe(p => {
            console.log(p);    
            this.posts = p.sort((p1, p2) => {
                if (p1.createdDate > p2.createdDate) {
                    return -1;
                }
                return 1;
            });
            //this.posts = p;
        });
        //this.posts = [
        //    {
        //        id: '1',
        //        text: 'teteyd',
        //        isPinned: false,
        //        createdDate: new Date(),
        //    },
        //    {
        //        id: '2',
        //        text: 'ewrw',
        //        isPinned: true,
        //        createdDate: new Date(),
        //    }];
    }

    public delete(post: Post) {
        //const index = this.posts.indexOf(post, 0);
        //if (index > -1) {
        //    this.posts.splice(index, 1);
        //}

        this.postService.deletePost(post.id).subscribe(x => {
            const index = this.posts.indexOf(post, 0);
            if (index > -1) {
                this.posts.splice(index, 1);
            }
        });
    }
}
