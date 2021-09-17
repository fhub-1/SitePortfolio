import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <ThemeProvider defaultTheme="light" attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>

      <header>
        <CookieConsent
          debug={true}
          location="bottom"
          style={{ backgroundColor: "gray", textAlign: "left" }}
          buttonStyle={{
            color: "indigo",
            background: "#fff",
            fontSize: "20px",
            expireAfter: 365,
          }}
        >
          This site uses cookies to provide you with a better user experience.
          For more information, refer to our{" "}
          <Link href="https://www.freeprivacypolicy.com/live/3a76bbca-415c-44d2-90e2-04567419725a">
            <button className="bg-indigo-500 rounded-md px-2 py-1 text-2xl font-semibold">
              Privacy Policy
            </button>
          </Link>{" "}
        </CookieConsent>
      </header>
    </>
  );
};

export default MyApp;
