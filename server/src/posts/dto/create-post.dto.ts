import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";

export class CreatePostDTO {
  @IsNumber()
  id: number;
  @IsString()
  @MinLength(10)
  title: string;
  @IsString()
  @MaxLength(2500)
  content: string;
  @IsString()
  @MaxLength(2100)
  image: string;
  constructor(id: number, title: string, content: string, image: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.image = image;
  }
}
