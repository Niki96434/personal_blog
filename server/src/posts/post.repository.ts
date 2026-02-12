import { Post } from "./post.entity";
export interface postRepository {
  getPost(id: number): Post;
  delPost(id: number): void;
  save(post: Post): Post;
  updPost(id: number): Post;
}
