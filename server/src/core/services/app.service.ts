import { Injectable } from '@nestjs/common';
import { Post } from '../interfaces/post.interface';

@Injectable() // сигнализирует о том, что класс PostService может управляться Nest IoC
export class PostService { 
  readonly posts: Post[] = []; // вместо сущностей используются интерфейсы к сущностям

  addPost(post : Post) { // интерфейс поста
    return 'Hello World!';
  }
  findAll() : Post[] {
    return 'массив постов'
  }
  delPost(post : Post) {
    return ...
  }
  getById(id: PostID) {
    return ...
  }

}
// бизнес-логика
// сохраняет в хранилище данные и извлекает, и использует controller, поэтому его называют провайдером
