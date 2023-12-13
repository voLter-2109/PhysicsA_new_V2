"use client";
import { useRouter } from "next/navigation";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  const router = useRouter();
  return (
    <html lang="en">
      <body>
        <span>своя ошибка</span>
        <button
          type="button"
          onClick={() => router.back()}
          style={{ border: "1px solid red" }}
        >
          Click here to go back
        </button>
      </body>
    </html>
  );
}
