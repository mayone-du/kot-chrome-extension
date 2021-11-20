import type { CustomNextPage } from "next";
import dynamic from "next/dynamic";
import { Layout } from "src/layout";

const Button = dynamic(
  async () => {
    const module = await import("src/components/Button");
    return module.Button;
  },
  {
    ssr: false,
    loading: () => {
      return <div>Loading...</div>;
    },
  },
);

const IndexPage: CustomNextPage = () => {
  return (
    <div>
      <h1 className="font-bold">KOT Chrome Extention</h1>

      <Button />

      <script src="./content.js"></script>
      <script src="./background.js"></script>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
