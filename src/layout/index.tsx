import type { NextPage } from "next";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const Layout = (page: NextPage) => {
  return (
    <main className="w-screen">
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </main>
  );
};
