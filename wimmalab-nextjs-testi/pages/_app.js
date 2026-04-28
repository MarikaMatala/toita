import '../styles/main.scss';

import { appWithTranslation } from 'next-i18next';

// Documentation:
// https://nextjs.org/docs/advanced-features/custom-app

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
