import { FC, PropsWithChildren } from "react";

const PostPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full text-center p-4 ">
      <h1 className="text-5xl">post page</h1>
      <div></div>
      {children}
    </div>
  );
};

export default PostPage;
