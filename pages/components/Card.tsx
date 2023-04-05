import React from "react";
import { Post } from "./../../typings";

//asset file
import { urlFor } from "@/sanity";

//link
import Link from "next/link";
interface Props {
  item: Post;
}
const Card: React.FC<Props> = ({ item }) => {
  return (
    <Link href={`/posts/${item?.slug}`}>
      <div className="flex flex-col gap-2 col-span-1 cursor-pointer">
        <div className="rounded-lg w-auto overflow-hidden">
          <img
            src={urlFor(item?.mainImage).url()}
            className="w-full h-60 object-cover transition-all duration-200 hover:scale-105 "
            alt="cover-image"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-lg">{item?.title}</p>
            <p className="text-base font-light">{item?.description}</p>
          </div>
          <img
            src={urlFor(item?.author.image).url()}
            className="object-cover rounded-full h-12 w-12"
            alt="avatar"
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
