import React, { FC } from "react";

const Post = async ({ params }: any) => {
  const data = await getData(params.slug);
  // console.log(data)

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[500px] bg-slate-300 p-10  rounded-md">
        <h1 className="text-center text-3xl mb-4">{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  );
};

export default Post;

const getData = async (slug: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
