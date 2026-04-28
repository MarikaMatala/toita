import Document, { Head, Html, Main, NextScript } from 'next/document';

// Documentation:
// https://nextjs.org/docs/advanced-features/custom-document

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Preload local fonts */}
          <link
            rel="preload"
            href="/fonts/SpaceGrotesk.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
