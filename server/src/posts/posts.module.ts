import { Module, Global } from '@nestjs/common';
import { PostController } from 'src/posts/post.controller';
import { PostService } from 'src/posts/post.service';

@Global() // постмодуль не нужно будет импортировать в другие модули, только постсервис
@Module({
    controllers: [PostController],
    providers: [PostService],
    exports: [PostService] // один и тот же экземпляр постсервиса будет использоваться при импортировании этого модуля другими модулями
})
export class PostsModule {
    constructor(private postService: PostService) {} // для логирования или инициализации(используется уже готовый экземпляр сервиса)
}
