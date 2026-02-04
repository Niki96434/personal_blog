import { Post } from '../interfaces/post.interface';
export interface PostRepository {
  getById(id: number): Promise<Post>;
  delPost(id: number): Promise<void>;
  save(post: Post): Promise<Post>;
  update(id: number): Promise<Post>;
}
// здесь я так понимаю мы пишем методы над постом
// репозиторий - слой для работы с абстрактными сущностями в их предметной области(он должен абстрагироваться от бд и использовать любой тип БАЗЫ данных)
// вопрос - почему здесь вообще промисы?....