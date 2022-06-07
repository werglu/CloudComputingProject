import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'edit-post-modal',
    templateUrl: './edit-post-modal.component.html',
})
export class EditPostModalComponent {
    form: FormGroup;
    selectedFile: File = null;
    postToEdit: Post;
    id: number;

    constructor(private formBuilder: FormBuilder,
        private activatedRoute: ActivatedRoute,
        private postService: PostService) {
 

        this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];

            console.log(`${this.id}`);

            this.postService.getPost(this.id).subscribe(post => {
                this.selectedFile = post.file;
                this.postToEdit = post;
                this.form = this.formBuilder.group({
                    text: post.text
                });
            })
        });
    }

    onSubmit() {
        if (this.form.valid) {
            const post = <Post>{
                text: this.form.value.text,
                createdDate: new Date(),
                file: this.selectedFile
            };

            this.postService.editPost(this.id, post).subscribe(
                response => {
                    this.form.reset();
                },
                (error: HttpErrorResponse) => {
                    console.log('error when adding new post');
                }
            )
        }
    }


    //onUpload() {
        

    //}

    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }
}
