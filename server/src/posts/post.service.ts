import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable() // сигнализирует о том, что класс PostService может управляться Nest IoC(контейнер, который управляет отношениями между провайдерами)
export class PostService {
  readonly posts: Post[] = [];
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>) {}
  addPost(post: Post) {
    this.posts(post);
    return 'пост добавлен';
  }
  findAll(): Post[] {
    return this.posts;
  }
  // type narrowing(truthiness narrow)
  findOne(id: number): Post | undefined {
    if (id) {
      const arrPosts = this.posts.filter((post) => post.id === id);
      for (const post of arrPosts) {
        return post;
      }
    } else {
      return;
    }
  }
}
