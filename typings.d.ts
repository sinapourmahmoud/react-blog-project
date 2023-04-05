export interface Post {
  _id: string;
  title: string;
  author: {
    _id: string;
    image: Array;
    name: string;
  };
  description: string;
  mainImage: object;
  slug: { current: string };
}
