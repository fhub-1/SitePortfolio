import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            data-ad-client="ca-pub-1327925580473487"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://partner.googleadservices.com/gampad/cookie.js?domain=www.flutterhub.online&callback=_gfp_s_&client=ca-pub-1327925580473487&cookie=ID%3Dfc2cb5566324b8b8-22d2822be8ca00e5%3AT%3D1631097555%3ART%3D1631097555%3AS%3DALNI_MYDx3o9wLj28KWZHEN5xiRaMVfjig"></script>
        </body>
      </Html>
    );
  }
}
