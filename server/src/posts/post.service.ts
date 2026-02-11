import { Injectable } from '@nestjs/common';
import { PostInterface } from '../posts/interfaces/post.interface';

@Injectable() // сигнализирует о том, что класс PostService может управляться Nest IoC(контейнер, который управляет отношениями между провайдерами)
export class PostService {
  readonly posts: PostInterface[] = []; // вместо сущностей используются интерфейсы к сущностям

  addPost(post: PostInterface) {
    this.posts.push(post);
    return 'пост добавлен';
  }
  findAll(): PostInterface[] {
    return this.posts;
  }
  // type narrowing(truthiness narrow)
  findOne(id: number): PostInterface | undefined {
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
