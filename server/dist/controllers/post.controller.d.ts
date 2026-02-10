import { PostService } from '../services/post.service';
import type { PostInterface } from '../interfaces/post.interface';
import type { FastifyRequest } from 'fastify';
import { CreatePostDTO } from '../dto/create-post.dto';
export declare class PostController {
    private readonly PostService;
    constructor(PostService: PostService);
    createPost(postDTO: CreatePostDTO): string;
    findAllPost(request: FastifyRequest): PostInterface[];
    findOnePost(id: number): PostInterface | undefined;
}
