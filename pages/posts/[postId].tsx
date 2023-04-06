import React from "react";
//components
import Nav from "../components/Nav";

//assets
import { client, urlFor } from "@/sanity";
import { fetchPostDetail } from "@/utils/data";
import PortableText from "react-portable-text";
import { useForm, SubmitHandler } from "react-hook-form";
//postInterfaces
import { Post } from "@/typings";
interface Iform {
  _id: string;
  email: string;
  name: string;
  comment: string;
}
interface PostDetail {
  slug: {
    current: string;
  };
}
interface Props {
  post: Post[];
}
const singlepost: React.FC<Props> = ({ post }) => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Iform>();

  const onSubmit: SubmitHandler<Iform> = async (data) => {
    await fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <Nav />
      <img
        src={urlFor(post[0].mainImage.asset.url).url()}
        alt="poster"
        className="w-full h-60 object-cover"
      />
      <div className="max-w-3xl mx-auto mt-10 px-4 lg:px-0">
        <h1 className="text-3xl">{post[0]?.title}</h1>
        <h2 className="text-xl font-light mt-2">{post[0]?.description}</h2>
        <div className="flex items-center gap-2">
          <img
            src={urlFor(post[0].author.image.asset.url).url()}
            className="w-10 h-10 rounded-full mt-2 object-cover"
            alt="avatar"
          />
          <p className="font-semibold text-green-600 ">{post[0].author.name}</p>
        </div>
        <PortableText
          className="mt-8"
          //from here
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          content={post[0].body}
          serializers={{
            h1: (props: any) => (
              <h1 className="text-2xl font-bold my-5" {...props} />
            ),
            h2: (props: any) => (
              <h1 className="text-xl font-bold my-4" {...props} />
            ),
            p: (props: any) => <h1 className="text-xl  my-4" {...props} />,
            li: ({ children }: any) => (
              <li className=" list-disc my-3">{children}</li>
            ),

            link: ({ children, href }: any) => (
              <a className=" text-blue-500 hover:underline" href={href}>
                {children}
              </a>
            ),
          }}
        />
        <div className="max-w-2xl mx-auto">
          <p className="text-2xl font-bold mt-3">Leave a comment below!</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="hidden"
              name="_id"
              value={post[0]._id}
              {...register("_id")}
            />
            <label>
              <span className="text-gray-700">Name</span>
              <input
                {...register("name", { required: true })}
                type="text"
                className="w-full shadow border block form-input focus:ring-yellow-500 focus:ring ring-0 rounded-md outline-none py-2 px-3"
                placeholder="Sina ..."
              />
            </label>
            <label className="block my-5">
              <span className="text-gray-700">Email</span>
              <input
                {...register("email", { required: true })}
                type="email"
                className="w-full shadow border block form-input focus:ring-yellow-500 focus:ring ring-0 rounded-md outline-none py-2 px-3"
                placeholder="Sina@gmail.com"
              />
            </label>
            <label>
              <span className="text-gray-700">Text</span>
              <textarea
                {...register("comment", { required: true })}
                rows={8}
                className="w-full shadow border block form-input focus:ring-yellow-500 focus:ring ring-0 rounded-md outline-none py-2 px-3"
                placeholder="example text"
              ></textarea>
            </label>
            <div className="flex flex-col gap-2 mt-3">
              {errors.name && (
                <span className="text-red-500">Name in required</span>
              )}
              {errors.email && (
                <span className="text-red-500">Email in required</span>
              )}
              {errors.comment && (
                <span className="text-red-500">Comment in required</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white my-3 w-full py-3 rounded-xl"
            >
              Send Comment
            </button>
          </form>
        </div>
      </div>
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
