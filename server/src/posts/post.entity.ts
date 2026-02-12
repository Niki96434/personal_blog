import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

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
    @CreateDateColumn()
    dateOfCreation: number;
    constructor(id: number, title: string, content: string, image: string, published: boolean, dateOfCreation: number) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.image = image;
        this.published = published;
        this.dateOfCreation = dateOfCreation;
    }
}

//таблица поста, которая будет сопоставляться в таблицей в бд
//тайпорм может сам определять репозиторий, но это антипаттерн