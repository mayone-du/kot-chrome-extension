import type { CustomNextPage } from "next";
import { Layout } from "src/layout";

const IndexPage: CustomNextPage = () => {
  // chrome.tabs.executeScript({ code: "document.body.style.backgroundColor = 'red';" });
  return (
    <div>
      <h1 className="font-bold">KOT Chrome Extention</h1>
    </div>
  );
};

export default IndexPage;

IndexPage.getLayout = Layout;
