import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  private posts: Post[] = []; //reference type

  getPosts() {
    return this.posts;
  }

  // depenency injection
  addPost(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
