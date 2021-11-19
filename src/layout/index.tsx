import type { NextPage } from "next";
import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

// pagesのgetLayoutで指定されたページで呼ばれる。ページのリロード時に呼ばれ、ページ遷移時には呼ばれない。
export const Layout = (page: NextPage) => {
  return (
    <main className="px-4 md:px-60 lg:px-72 mx-auto">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
  );
};
