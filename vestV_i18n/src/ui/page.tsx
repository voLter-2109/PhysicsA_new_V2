"use client"

import { TPost } from "@/app/[locale]/page";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LiPost = ({ data }: { data: TPost }) => {
  // const t = useTranslations("IndexPage");
  const pathname = usePathname();

  return (
    <li className="list-disc my-2 bg-slate-200  w-fit">
      <Link href={`${pathname}/post/${data.id}`}>
        {data.id}: {data.title}
      </Link>
    </li>
  );
};

export default LiPost;
