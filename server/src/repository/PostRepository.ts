import { PostInterface } from '../posts/interfaces/post.interface';
export interface PostRepository {
  getPost(id: number): Promise<PostInterface>;
  delPost(id: number): Promise<void>;
  save(post: PostInterface): Promise<PostInterface>;
  setPost(id: number): Promise<PostInterface>;
}
// здесь я так понимаю мы пишем методы над постом
// репозиторий - слой для работы с абстрактными сущностями в их предметной области(он должен абстрагироваться от бд и использовать любой тип БАЗЫ данных)
// вопрос - почему здесь вообще промисы?...