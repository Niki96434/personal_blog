import { Controller, Get, Post, Header, Redirect, Param, Req, Body } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { PostInterface } from '../interfaces/post.interface';
import { FastifyRequest } from 'fastify';
import { HttpCode } from '@nestjs/common';
// import { CreatePostDTO } from '../dto/create-post.dto';
@Controller({ host: ':admin.blog.com' }) // контроллер сработает только на хосте админа
export class PostController {
  constructor(private readonly PostService: PostService) {} // нест создает экземпляр класса сервис сам(di)
  @Post() // POST /posts
  @Header('Content-Type', 'application/json') // задаем формат ответа
  @HttpCode(201) // запрос выполнен, обработка завершена
  createPost(@Body() postDTO: CreatePostDTO) { // по декораторам Body, Request, Param и так далее вытаскиваем нужные свойства объекта запроса
    return this.PostService.addPost(postDTO);
  }
  @Get('/posts') // GET /posts
  @Redirect('/posts', 200)
  findAllPost(@Req() request: FastifyRequest): PostInterface[] { // целый объект запроса к сервису(провайдеру)
    console.log(request.body);
    return this.PostService.findAll();
  }
  @Get(':id')
  @Redirect('id', 301) // если найдено без урл,то по дефолту 302
  findOnePost(@Param('id') id: number) {
    console.log(id);
    return `получен пост с ${id}`;
  }
}
//описываем маршрут для метаданных
//посредник между сервисом и модулям(сущностями)
//контроллеры позволяют получать http-запрос и передавать более сложные задачи провайдерам(репозиториям, сервисам и тд)
