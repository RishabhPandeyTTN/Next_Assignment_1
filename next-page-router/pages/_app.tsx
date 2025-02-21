import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isHomepage = router.pathname === "/";
  return (
    <>
      {isHomepage && <Header></Header>}

      <main>
        <Component {...pageProps} />
      </main>

      {isHomepage && <Footer></Footer>}
    </>
  );
}
