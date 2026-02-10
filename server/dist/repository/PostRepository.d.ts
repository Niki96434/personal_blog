import { PostInterface } from '../interfaces/post.interface';
export interface PostRepository {
    getPost(id: number): Promise<PostInterface>;
    delPost(id: number): Promise<void>;
    save(post: PostInterface): Promise<PostInterface>;
    setPost(id: number): Promise<PostInterface>;
}
