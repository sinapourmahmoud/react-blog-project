import React from "react";

//components
import Nav from "./components/Nav";
import Card from "./components/Card";

//files
import { fetchPostDetail } from "../utils/data";
import { Post } from "./../typings";

//interface
interface Props {
  posts: Post[];
}
import { client } from "./../sanity";
const index: React.FC<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="max-w-7xl mx-auto py-6">
      <Nav />
      <div className="flex justify-between items-center bg-yellow-400 rounded-sm px-2 md:px-5 py-3 lg:py-0 border-y border-black">
        <div className="flex flex-col gap-2">
          <h2 className="text-6xl font-sarif max-w-xl">
            <span className="underline underline-offset-4 ">Medium</span> is a
            place to write, read and connect
          </h2>
          <h2>
            Its easy to read and write comments and bogs for people and have fun
            and find friend
          </h2>
        </div>
        <img
          className="hidden h-32 md:block lg:h-full"
          src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
          alt="medium-logo"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 lg:px-0 mt-4 gap-6">
        {posts?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  let posts = await client.fetch(fetchPostDetail());
  return {
    props: {
      posts,
    },
  };
};
export default index;
