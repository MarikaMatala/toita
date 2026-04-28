import { withTranslation } from 'next-i18next';

import Footer from '/components/Footer';
import Meta from '/components/Meta';
import Navbar from '/components/Navbar';
export const siteTitle = 'WIMMA Lab';

export function Layout({ t, children }) {
  return (
    <>
      <Meta />
      <Navbar t={t} />
      <div className="content">{children}</div>
      <Footer t={t} />
    </>
  );
}

export default withTranslation()(Layout);
