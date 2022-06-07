import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
    selector: 'add-new-post-modal',
    templateUrl: './add-new-post-modal.component.html',
})
export class AddNewPostModalComponent {
    addForm: FormGroup;
    selectedFile: File = null;

    constructor(private formBuilder: FormBuilder,
        private postService: PostService) {
        this.addForm = this.formBuilder.group({
            text: ''
        });
    }

    onSubmit() {
        if (this.addForm.valid) {
            const post = <Post>{
                text: this.addForm.value.text,
                createdDate: new Date(),
                file: this.selectedFile
            };

            this.postService.addPost(post).subscribe(
                response => {
                    this.addForm.reset();
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
