export interface Post {
  _id: string;
  title: string;
  body: Array;
  author: {
    _id: string;
    image: { asset: { url: string } };
    name: string;
  };
  _createdAt: string;
  description: string;
  mainImage: { asset: { url: string } };
  publishedAt: string;
  slug: { current: string };
}
