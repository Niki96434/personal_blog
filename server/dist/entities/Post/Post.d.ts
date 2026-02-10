import { PostInterface } from 'src/interfaces/post.interface';
export declare class Post implements PostInterface {
    readonly id: number;
    title: string;
    content: string;
    date: number;
    image: string;
    constructor(id: number | undefined, title: string, content: string, date: number | undefined, image: string);
}
