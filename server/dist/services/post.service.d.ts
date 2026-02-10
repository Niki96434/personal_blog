import { PostInterface } from '../interfaces/post.interface';
export declare class PostService {
    readonly posts: PostInterface[];
    addPost(post: PostInterface): string;
    findAll(): PostInterface[];
    findOne(id: number): PostInterface | undefined;
}
