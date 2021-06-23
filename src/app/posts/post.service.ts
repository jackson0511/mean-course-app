import { Post } from "./post.model";

export class PostsService {
  private posts: Post[] = []; //reference type

  getPost() {
    return this.posts;
  }
}
