import { Suspense } from "react";

import { ThemeSwitch } from "@acme/web-ui";

import { AuthShowcase } from "./_components/auth-showcase";
import {
  CreatePostForm,
  PostCardSkeleton,
  PostList,
} from "./_components/posts";

export const runtime = "edge";

export default function HomePage() {
  return (
    <div>
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <AuthShowcase />

        <CreatePostForm />
        <div className="h-[40vh] w-full max-w-2xl overflow-y-scroll">
          <Suspense
            fallback={
              <div className="flex w-full flex-col gap-4">
                <PostCardSkeleton />
                {/* <PostCardSkeleton /> */}
                {/* <PostCardSkeleton /> */}
              </div>
            }
          >
            <PostList />
          </Suspense>
        </div>
      </div>

      <div className="">
        <ThemeSwitch />
      </div>
    </div>
  );
}
