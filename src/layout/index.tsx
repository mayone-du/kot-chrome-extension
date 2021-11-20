import type { NextPage } from "next";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout = (page: NextPage) => {
  return (
    <main className="py-2 px-8 bg-red-300">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
  );
};
