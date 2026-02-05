import { Controller, Get } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post.interface';
import { CreatePostDTO } from '../dto/create-post.dto';
@Controller()
export class PostController {
  constructor(private readonly PostService: PostService) {}

  @Get()
  async findAllPost(): Post[] {
    return PostService.findAll()
  }
  @Post() 
  async createPost(@Body() postDTO: CreatePostDTO) {
    this.PostService.addPost(postDTO);
  }   

}
//посредник между сервисом и модулям(сущностями)
//контроллеры позволяют получать http-запрос и передавать более сложные задачи провайдерам(репозиториям, сервисам и тд)
// контроллеру передается аргумент класс сервиса, нест сам создает экземпляр класса и это называется DI
