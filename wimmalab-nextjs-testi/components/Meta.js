import Head from 'next/head';

export default function Meta() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* Favicon variations */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#020405" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="theme-color" content="#020405" />

      {/* Primary meta tags */}
      <title>WIMMA Lab</title>
      <meta name="title" content="WIMMA Lab" />
      <meta
        name="description"
        content="WIMMA Lab on haastekeskeinen oppimiskonsepti, joka toteutetaan hybridimuodossa vuonna 2022."
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.wimmalab.org/" />
      <meta property="og:title" content="WIMMA Lab" />
      <meta
        property="og:description"
        content="WIMMA Lab on haastekeskeinen oppimiskonsepti, joka toteutetaan hybridimuodossa vuonna 2022."
      />
      <meta property="og:image" content="https://www.wimmalab.org/assets/meta_wimma.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.wimmalab.org/" />
      <meta property="twitter:title" content="WIMMA Lab" />
      <meta
        property="twitter:description"
        content="WIMMA Lab on haastekeskeinen oppimiskonsepti, joka toteutetaan hybridimuodossa vuonna 2022."
      />
      <meta property="twitter:image" content="https://www.wimmalab.org/assets/meta_wimma.png" />
    </Head>
  );
}
