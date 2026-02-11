import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PostsModule } from './posts/posts.module';
// объект конфигурации
@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3000,
      username: 'nikki',
      password: 'psw228',
      database: 'posts_db',
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor(private DataSource: DataSource) { // объект для подкл/откл бд

  }
}
