import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="font-bold">title</h1>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
