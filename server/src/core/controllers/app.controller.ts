import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
//посредник между сервисом и модулям(сущностями)
//контроллеры позволяют получать http-запрос и передавать более сложные задачи провайдерам(репозиториям, сервисам и тд)