import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import Img2 from '/public/assets/companies_events.png';
import companyBg from '/public/assets/companies_hero-bg.png';
import Img1 from '/public/assets/companies_work-with-us.png';
import Narsu from '/public/assets/narsu.png';

import IconAssignment from '../svgs/icon-assignment.svg';
import IconEvents from '../svgs/icon-events.svg';
import IconLecturer from '../svgs/icon-leader.svg';
import IconMentor from '../svgs/icon-mentor.svg';
import Calendar from '../svgs/icon-sm-calendar.svg';
import LinkedIn from '../svgs/socials-linkedin.svg';
import SvgUnderline from '../svgs/underline.svg';

const Companies = () => {
  const { t } = useTranslation('companies');
  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Information for companies */}
      <section className="content__section hero--companies hero margin-b">
        <Image
          src={companyBg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          quality={96}
          className="hero__bg"
          priority={true}
        />
        <div className="hero__container">
          <p className="hero__for">
            {t('h1-for1')}{' '}
            <span>
              {t('h1-for2')}
              <SvgUnderline />
            </span>
          </p>
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>

      {/* What is WIMMA Lab */}
      <section className="content__section work-with-us" id="why">
        <div className="simple-grid">
          <div>
            <h2 id="why">{t('h2-companies')}</h2>
            <ul>
              <li>
                <p>{t('li-reasons-1')}</p>
              </li>
              <li>
                <p>{t('li-reasons-2')}</p>
              </li>
              <li>
                <p>{t('li-reasons-3')}</p>
              </li>
              <li>
                <p>{t('li-reasons-4')}</p>
              </li>
            </ul>
          </div>
          <div>
            <ImageWrapper src={Img1} />
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="content__section participate" id="how">
        <div>
          <div>
            <h2 className="text-center" id="how">{t('h2-how-to-participate')}</h2>
            <p className="p-intro">{t('p-how-to-participate')}</p>
          </div>
          <div className="get-involved-card__wrapper">
            <div className="get-involved-card">
              <div>
                <IconAssignment className="icon-assignment" />
                <h4>{t('h3-assignment')}</h4>
                <p>{t('p-assignment')}</p>
              </div>
            </div>
            <div className="get-involved-card">
              <div>
                <IconLecturer />
                <h4>{t('h3-guest-lectures')}</h4>
                <p>{t('p-guest-lectures')}</p>
              </div>
            </div>
            <div className="get-involved-card">
              <div>
                <IconEvents className="icon-events" />
                <h4>{t('h3-even-sponsorship')}</h4>
                <p>{t('p-even-sponsorship')}</p>
              </div>
            </div>
            <div className="get-involved-card">
              <div>
                <IconMentor className="icon-mentor" />
                <h4>{t('h3-mentoring')}</h4>
                <p>{t('p-mentoring')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="content__section events" id="events">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={Img2} className="events__img" />
          </div>
          <div>
            <h3 className="p-narrow" id="events">{t('h2-events')}</h3>
            <div className="events__month-wrapper">
              <Calendar />
              <p className="events__month">{t('month-events-kettuketer')}</p>
            </div>
            <div className="events__card">
              <h4>{t('h3-events-kettuketer')}</h4>
              <p>{t('p-events-kettuketer')}</p>
            </div>
            <div className="events__month-wrapper">
              <Calendar />
              <p className="events__month">{t('month-events-kaunailta')}</p>
            </div>
            <div className="events__card">
              <h4>{t('h3-events-kaunailta')}</h4>
              <p>{t('p-events-kaunailta')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      {/* <section className="content__section simple-grid experience">
        <div>
          <h2>{t('h2-experiences')}</h2>
        </div>
        <div className="simple-grid experience-card">
          <div className="company-card company-card--blue">
            <div>
              <Image src={PlaceholderImg} className="experience-image" />
            </div>
            <div>
              <p>{t('p-experience-1')}</p>
              <p>{t('p-experience-1-who')}</p>
              <p>{t('p-experience-1-company')}</p>
            </div>
          </div>
          <div className="company-card company-card--blue">
            <div>
              <Image src={PlaceholderImg} className="experience-image" />
            </div>
            <div>
              <p>{t('p-experience-2')}</p>
              <h5>{t('p-experience-2-who')}</h5>
              <p>{t('p-experience-2-company')}</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact us */}
      <section className="content__section contact" id="contact">
        <div className="simple-grid">
          <div>
            <h3 className="p-narrow" id="contact">{t('h2-contact-us')}</h3>
            <div className="contact-card">
              <div className="contact-card__image-container">
                <Image src={Narsu} />
              </div>
              <div className="contact-card__details">
                <div>
                  <h4>Marko &quot;Narsu&quot; Rintamäki</h4>
                  <p>
                    <a href="mailto:marko.rintamaki@jamk.fi">marko.rintamaki@jamk.fi</a>
                  </p>
                </div>
                <div className="contact-card__details-icon">
                  <a
                    href="https://www.linkedin.com/in/narsuman/"
                    target="_blank"
                    rel="noreferrer noopener">
                    <LinkedIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social media */}
      {/* <section className="content__section">
        <h2>{t('h2-social-media')}</h2>
      </section> */}
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'companies']))
  }
});

export default Companies;
