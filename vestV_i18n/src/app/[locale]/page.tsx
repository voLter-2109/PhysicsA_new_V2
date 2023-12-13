import { locales } from "@/config";
import LocaleSwitcher from "@/ui/LangSwitch";
import Test from "@/ui/test";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type Props = {
  params: { locale: string };
  data: TPost;
};

const Page = ({ params: { locale } }: any) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  // console.log("🚀 ~ file: page.tsx:32 ~ Page ~ isValidLocale:", locale);
  //
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // const t = useTranslations("IndexPage");

  return (
    <div className="flex flex-col p-6 ">
      <ul className="list-disc">
        <LocaleSwitcher />
        <Test />
      </ul>
    </div>
  );
};

export default Page;
