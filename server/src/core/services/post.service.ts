import { Injectable } from '@nestjs/common';
import { Post } from '../interfaces/post.interface';

@Injectable() // сигнализирует о том, что класс PostService может управляться Nest IoC(контейнер, который управляет отношениями между провайдерами)
export class PostService { 
  readonly posts: Post[] = []; // вместо сущностей используются интерфейсы к сущностям

  addPost(post: Post) { // интерфейс поста
    this.posts.push(post);
    return 'пост добавлен'
  }
  findAll() : Post[] {
    return 'массив постов'
  }

}
// бизнес-логика
// сохраняет в хранилище данные и извлекает, и используется controller-ом(потребителем).(здесь нет приема http-запросов, только работа с данными)
// провайдеры позволяют использовать инверсию зависимостей(на классах или на свойствах)