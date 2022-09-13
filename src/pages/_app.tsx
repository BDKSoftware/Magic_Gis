import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./components/NavBar";
import PromoBar from "./components/PromoBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <PromoBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
