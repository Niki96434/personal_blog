import {
  Controller,
  Get,
  Post,
  Header,
  Redirect,
  Param,
  Req,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { PostService } from '../services/post.service';
import type { PostInterface } from '../interfaces/post.interface';
import type { FastifyRequest } from 'fastify';
import { HttpCode } from '@nestjs/common';
import { CreatePostDTO } from '../dto/create-post.dto';
@Controller('/posts')
export class PostController {
  constructor(private readonly PostService: PostService) {} // нест сам создает экземпляр класса сервис(di)
  @Post()
  @Header('Content-Type', 'application/json')
  @HttpCode(201)
  createPost(@Body() postDTO: CreatePostDTO) {
    return this.PostService.addPost(postDTO);
  }
  @Get('/list')
  @HttpCode(201)
  findAllPost(@Req() request: FastifyRequest): PostInterface[] {
    console.log(request.body);
    return this.PostService.findAll();
  }
  @Get(':id')
  @Redirect('id', 301) // код перемещения
  // передаем методу класс ParseIntPipe, оставляя ответственность на создании экземпляра класса на несте(di)
  findOnePost(@Param('id', ParseIntPipe) id: number): PostInterface | undefined {
    if (id) {
      return this.PostService.findOne(id);
    } else {
      return;
    }
  }
}
