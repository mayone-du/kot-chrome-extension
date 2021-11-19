import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="font-bold">KOT Chrome Extention</h1>

      <script src="./content.js"></script>
      <script src="./background.js"></script>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
