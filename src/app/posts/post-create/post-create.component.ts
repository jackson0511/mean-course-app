import { Component } from "@angular/core";
// import { Component, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Post } from '../../posts/post.model';
import { PostsService } from "../post.service";

// Decorator
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post.create.component.css']
})

export class PostCreateComponent {


  // Using local reference
  // newPost = 'NO CONTENT';
  // onAddPost(postInput: HTMLTextAreaElement) {
    //   console.dir(postInput);
    //   his.newPost = postInput.value;
    // }

  // using twoway binding
  // newPost = 'NO CONTENT';
  // enteredValue = '';
  // onAddPost(){
  //   this.newPost = this.enteredValue;
  // }

  // using property and event binding to create new post
  // enteredTitle = "";
  // enteredContent = "";
  // @Output() postCreated = new EventEmitter<Post>();

  // onAddPost(){
  //   const post: Post = {
  //     title: this.enteredTitle,
  //     content: this.enteredContent
  //   };
  //   this.postCreated.emit(post);
  // }

  // using form to add new post
  enteredTitle = "";
  enteredContent = "";
  // @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) {

  }

  onAddPost(form: NgForm){
    if (form.invalid){
      return;
    }
    // const post: Post = {
    //   title: form.value.title,
    //   content: form.value.content
    // };
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
