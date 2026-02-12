export class Post {
  constructor(
    readonly id: number,
    title: string,
    content: string,
    date = Date.now(),
    image: string,
  ) {}
}
