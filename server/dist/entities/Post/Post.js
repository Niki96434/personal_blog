"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    id;
    title;
    content;
    date;
    image;
    constructor(id = 1, title, content, date = Date.now(), image) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.image = image;
    }
}
exports.Post = Post;
//# sourceMappingURL=Post.js.map