import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    content: string;
    @Column()
    image: string;
    @Column({ default: false })
    published: boolean;
    constructor(id: number, title: string, content: string, image: string, published: boolean) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.published = published;
    }
}

//таблица поста