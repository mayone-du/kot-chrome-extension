import type { CustomAppProps } from "next/app";
import { memo } from "react";
import "tailwindcss/tailwind.css";

const App = memo((props: CustomAppProps) => {
  const getLayout = props.Component.getLayout || ((page) => page);

  return <>{getLayout(<props.Component {...props.pageProps} />)}</>;
});

export default App;

App.displayName = "App";
