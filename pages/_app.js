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
          This site uses cookies.See Our{" "}
          <Link href="https://www.freeprivacypolicy.com/live/3a76bbca-415c-44d2-90e2-04567419725a">
            <button
              style={{
                background: "indigo",
                fontSize: "14px",
                color: "gray",
              }}
            >
              Privacy Policy
            </button>
          </Link>{" "}
          for more information.
        </CookieConsent>
      </header>
    </>
  );
};

export default MyApp;
