"use client";

import { notFound, redirect } from "next/navigation";

const locales = ["en", "de"];
// This page only renders when the app is built statically (output: 'export')
export default function RootPage() {

  const lang = localStorage.getItem("lang");

  if (!lang ) {
    localStorage.setItem("lang", "de");
    redirect("/de");
  } else {
    redirect(`/${lang}`);
  }
}
