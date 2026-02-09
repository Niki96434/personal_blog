import { PostInterface } from "src/core/interfaces/post.interface";
export class Post implements PostInterface { // просто проверка на соответствие типам интерфейса
  readonly id: number; // можно изменять только в конструкторе(можно просто убрать сет и оставить гет)
  title: string;
  content: string;
  date: number;
  image: string;
  constructor(id = 1, title: string, content: string, date = Date.now(), image: string) {
    this.id = id, 
    this.title = title,
    this.content = content,
    this.date = date,
    this.image = image,
}
}