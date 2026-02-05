import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';

@Module({ // объект конфигурации
  imports: [],
  controllers: [PostController],
  providers: [PostService], // необязателен
})
export class AppModule {}
// позволяет несту обрабатывать внедрение зависимостей