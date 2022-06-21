import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from '../file.service';
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
        private router: Router,
        private postService: PostService,
        private fileService: FileService) {
        this.addForm = this.formBuilder.group({
            text: '',
            isPinned: false
        });
    }

    onSubmit() {
        if (this.addForm.valid) {
            const post = <Post>{
                text: this.addForm.value.text,
                isPinned: this.addForm.value.isPinned,
                createdDate: new Date(),
                filename: this.selectedFile ? this.selectedFile.name : null
            };

            this.postService.addPost(post).subscribe(
                (response: Post) => {
                    if (this.selectedFile) {
                        this.fileService.addFile(this.selectedFile, response.id).subscribe(
                            resp => {
                                console.log(resp);
                            },
                            err => {
                                console.log(err);
                            });
                    }
                    this.router.navigateByUrl('/');
                },
                error => {
                    console.log('error when adding new post');
                }
            )
        }
    }

    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }
}
