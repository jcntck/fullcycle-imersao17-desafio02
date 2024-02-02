export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export class PostService {
  private posts: Post[] = [];

  async getPosts({ page = 1, size }: { page: number; size: number }): Promise<Post[]> {
    const response = await fetch(`${process.env.EXTERNAL_API_URL}/posts`);
    this.posts = await response.json();

    const start = (page - 1) * size;
    const posts = this.posts.slice(start, start + size);
    return posts;
  }

  async getPostById(id: number): Promise<Post> {
    const response = await fetch(`${process.env.EXTERNAL_API_URL}/posts/${id}`);
    return response.json();
  }
}
