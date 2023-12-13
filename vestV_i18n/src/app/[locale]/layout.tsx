import { locales } from "@/config";
import ThemeComponentProvider from "@/ui/Provider";
import ThemeSwitcher from "@/ui/ThemeSwitcher";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   // @ts-ignore
//   const t = await getTranslations({ locale, namespace: "IndexPage" });

//   return {
//     h1: t("h1"),
//     title: t("title"),
//   };
// }
const RootLayout: FC<Props> = ({ children, params: { locale } }: Props) => {
  if (!locales.includes(locale as any)) notFound();

  const t = useTranslations("IndexPage");

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen mx-auto max-w-6xl flex flex-col ">
        <ThemeComponentProvider>
          <div className="flex flex-col items-center space-y-6">
            <h1 className="max-w-3xl text-center font-bold text-black dark:text-white text-5xl leading-tight ">
              {t("h1")}
            </h1>
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeComponentProvider>
      </body>
    </html>
  );
};

export default RootLayout;
