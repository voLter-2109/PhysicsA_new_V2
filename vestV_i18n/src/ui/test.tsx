import LiPost from "@/ui/page";
import { TPost } from "../app/[locale]/page";

const getData = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Test = async () => {
  const data = await getData();

  return (
    <>
      {data &&
        data.map((post: TPost, index: any) => (
          <LiPost key={+index + 1} data={post} />
        ))}
    </>
  );
};

export default Test;
