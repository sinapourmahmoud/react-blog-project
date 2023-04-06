import React from "react";
//components
import Nav from "../components/Nav";

//assets
import { client } from "@/sanity";
import { fetchPostDetail } from "@/utils/data";
//postInterfaces
import { Post } from "@/typings";
interface PostDetail {
  slug: {
    current: string;
  };
}
interface Props {
  post: Post;
}
const singlepost: React.FC<Props> = ({ post }) => {
  console.log(post);
  return (
    <div>
      <Nav />
    </div>
  );
};
export const getStaticPaths = async () => {
  let query = `*[_type == "post"]{
        slug{current}
      }`;
  let posts: PostDetail[] = await client.fetch(query);
  let postPaths = posts.map((item) => {
    return { params: { postId: `${item.slug.current}` } };
  });
  return {
    paths: postPaths,
    fallback: "blocking",
  };
};
export const getStaticProps = async (context: any) => {
  let post = await client.fetch(fetchPostDetail(context.params.postId));
  return {
    props: {
      post,
    },
    revalidate: 180,
  };
};
export default singlepost;
