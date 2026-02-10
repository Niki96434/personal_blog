import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { DatabaseModule } from 'src/database/database.module';
// объект конфигурации
@Module({
  imports: [DatabaseModule],
  controllers: [PostController],
  providers: [PostService],
  exports: [], // экспорт модулей, которые можно переиспользовать
})
export class AppModule {}
