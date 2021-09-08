import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import * as gtag from "../lib/gtag";

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
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;

// import "../styles/globals.css";
// import { ThemeProvider } from "next-themes";

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider defaultTheme="light" attribute="class">
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;
