import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Accordion from '/components/Accordion';
import Button from '/components/Button';
import CustomLink from '/components/CustomLink';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import Profile2 from '/public/assets/pfp-hannu.png';
import Profile1 from '/public/assets/pfp-minttu.png';
import HeroBg from '/public/assets/students-hero-bg.png';
import Img1 from '/public/assets/students-img1.png';

import IconCoach from '../svgs/icon-coach.svg';
import IconDesign from '../svgs/icon-design.svg';
import IconDev from '../svgs/icon-dev.svg';
import IconDevOps from '../svgs/icon-devops.svg';
import IconLeader from '../svgs/icon-leader.svg';
import LogoIotitude from '../svgs/logo-iotitude.svg';
import LogoMysticons from '../svgs/logo-mysticons.svg';
import LogoOverflow from '../svgs/logo-overflow.svg';
import LogoPengwin from '../svgs/logo-pengwin.svg';
import SvgUnderline from '../svgs/underline.svg';

const Students = () => {
  const { t } = useTranslation('students');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--students margin-b">
        <Image
          src={HeroBg}
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
          <Button
            icon
            href="https://ttvw0110.pages.labranet.jamk.fi/wimmalab2023/01-Application-Phase/application/">
            {t('apply-button')}
          </Button>
        </div>
      </section>

      {/* Information for students */}
      <section className="content__section">
        <div>
          <div className="simple-grid margin-b">
            <div>
              <h2>{t('h2-students')}</h2>
              <p>{t('p-wimma-lab-offers-1')}</p>
              <p>{t('p-wimma-lab-offers-2')}</p>
            </div>
            <div className="teams__logo-grid">
              <CustomLink href="/iotitude" locale="fi" className="teams__iotitude">
                <span className="visually-hidden">IoTitude</span>
                <LogoIotitude />
              </CustomLink>
              <CustomLink href="/mysticons" locale="fi" className="teams__mysticons">
                <span className="visually-hidden">Mysticons</span>
                <LogoMysticons className="1h" />
              </CustomLink>
              <CustomLink href="/overflow" locale="fi" className="teams__overflow">
                <span className="visually-hidden">Overflow</span>
                <LogoOverflow />
              </CustomLink>
              <CustomLink href="/pengwin" locale="fi" className="teams__pengwin">
                <span className="visually-hidden">Pengwin Media</span>
                <LogoPengwin />
              </CustomLink>
            </div>
          </div>
          <div className="simple-grid">
            <div>
              <ImageWrapper src={Img1} className="students-img1" />
            </div>
            <div id="application_process">
              <h3 className="students__apply-h3">{t('h3-apply-to-wimma-lab')}</h3>
              <p>{t('p-apply-to-wimma-lab-1')}</p>
              <p>{t('p-apply-to-wimma-lab-2')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://ttvw0110.pages.labranet.jamk.fi/wimmalab2022/01-hakuvaihe/haku/">
                {t('apply-button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roles in WIMMA Lab */}
      <section className="content__section" id="roles">
        <div>
          <h2 className="text-center" id="roles">{t('h2-roles')}</h2>
          <p className="p-intro">{t('p-roles')}</p>
          <div className="roles__wrapper">
            <div className="roles__box">
              <IconDev className="icon-dev" />
              <ul>
                <li>{t('li-roles-frontend')}</li>
                <li>{t('li-roles-backend')}</li>
                <li>{t('li-roles-servicedesign')}</li>
              </ul>
            </div>
            <div className="roles__box">
              <IconDevOps className="icon-devops" />
              <ul>
                <li>DevSecOps</li>
                <li>CI/CD</li>
                <li>{t('li-roles-testing')}</li>
              </ul>
            </div>
            <div className="roles__box">
              <IconDesign className="icon-design" />
              <ul>
                <li>{t('li-roles-uidesign')}</li>
                <li>{t('li-roles-graphicdesign')}</li>
                <li>{t('li-roles-photography')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interested in more responsibility? */}
      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h3>{t('h3-responsibility')}</h3>
            <p className="p-narrow p-bigger">{t('p-responsibility')}</p>
          </div>
          <div>
            <div className="leader-card">
              <IconLeader />
              <h4>{t('h3-team-leader')}</h4>
              <p>{t('p-team-leader')}</p>
            </div>
            <div className="leader-card">
              <IconCoach className="icon-coach" />
              <h4>{t('h3-student-coach')}</h4>
              <p>{t('p-student-coach')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WIMMA Lab timeline */}
      <section className="content__section" id="course_timeline">
        <div>
          <h2 className="h2-centered" id="course_timeline">{t('h2-timeline')}</h2>
          <div className="timeline">
            <p className="month first">{t('month-orientation-week')}</p>
            <div className="timeline__box first">
              <h4 className="timeline__h4">{t('h3-orientation-week')}</h4>
              <p className="timeline__p">{t('p-orientation-week')}</p>
            </div>
            <p className="month second">{t('month-open-doors')}</p>
            <div className="timeline__box second">
              <h4 className="timeline__h4">{t('h3-open-doors')}</h4>
              <p className="timeline__p">{t('p-open-doors')}</p>
            </div>
            <p className="month third">{t('month-kettuketer')}</p>
            <div className="timeline__box third">
              <h4 className="timeline__h4">{t('h3-kettuketer')}</h4>
              <p className="timeline__p">{t('p-kettuketer')}</p>
            </div>
            <p className="month fourth">{t('month-kaunailta')}</p>
            <div className="timeline__box fourth">
              <h4 className="timeline__h4">{t('h3-kaunailta')}</h4>
              <p className="timeline__p">{t('p-kaunailta')}</p>
            </div>
            <p className="month fifth">{t('month-retro-day')}</p>
            <div className="timeline__box fifth">
              <h4 className="timeline__h4">{t('h3-retro-day')}</h4>
              <p className="timeline__p">{t('p-retro-day')}</p>
            </div>
            <div className="timeline__line"></div>
          </div>
        </div>
      </section>

      {/* Questions & answers */}
      <section className="content__section margin-t" id="faq">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-faq')}</h2>
            <p className="p-narrow p-bigger">{t('p-faq-more-info')}</p>
            <Button href="/guides" type="secondary" className="margin-t" locale="fi" icon>
              {t('button-faq-guides')}
            </Button>
          </div>
          <div>
            <Accordion title={t('p-faq-q1')} id="faq-q1">
              <p className="faq__p">{t('p-faq-a1')}</p>
            </Accordion>
            <Accordion title={t('p-faq-q2')} id="faq-q2">
              <p className="faq__p">{t('p-faq-a2')}</p>
            </Accordion>
            <Accordion title={t('p-faq-q3')} id="faq-q3">
              <p className="faq__p">{t('p-faq-a3')}</p>
            </Accordion>
            <Accordion title={t('p-faq-q4')} id="faq-q4">
              <p className="faq__p">{t('p-faq-a4')}</p>
            </Accordion>
            <Accordion title={t('p-faq-q6')} id="faq-q6">
              <p className="faq__p">{t('p-faq-a6')}</p>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Comments from past participants */}
      <section className="content__section" id="testimonials">
        <div>
          <h2 className="h2-centered" id="testimonials">{t('h2-experiences')}</h2>
          <div className="comments__wrapper">
            <div className="comments__box">
              <div className="comments__comment">
                <p>
                  <span>&quot;</span>
                  {t('exp1-comment')}
                  <span>&quot;</span>
                </p>
              </div>
              <div className="comments__profile">
                <Image
                  src={Profile1}
                  alt="Minttu Mäkäläinen"
                  className="comments__image"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="comments__name">Minttu Mäkäläinen</p>
                  <p>{t('exp1-title')} (2018)</p>
                </div>
              </div>
            </div>
            <div className="comments__box">
              <div className="comments__comment">
                <p>
                  <span>&quot;</span>
                  {t('exp2-comment')}
                  <span>&quot;</span>
                </p>
              </div>
              <div className="comments__profile">
                <Image
                  src={Profile2}
                  alt="Hannu Oksman"
                  className="comments__image"
                  width={100}
                  height={100}
                />
                <div>
                  <p className="comments__name">Hannu Oksman</p>
                  <p>{t('exp1-title')} (2019)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students']))
  }
});

export default Students;
