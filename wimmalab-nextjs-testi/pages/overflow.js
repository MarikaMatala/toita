import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member1 from '/public/assets/overflow/Veeti.jpg';
import member2 from '/public/assets/overflow/Mays.jpg';
import member3 from '/public/assets/overflow/Arho.jpg';
import member4 from '/public/assets/overflow/Maha.jpg';
import member5 from '/public/assets/overflow/Michael.jpg';
import member6 from '/public/assets/overflow/Onni.jpg';
import member7 from '/public/assets/overflow/Adham.jpg';
import team from '/public/assets/overflow/Overflow-tiimi.jpg';

import OverflowLogo from '../svgs/logo-overflow.svg';

const Overflow = () => {
  const { t } = useTranslation('overflow');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--overflow margin-b">
        <div className="hero__container">
          <OverflowLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Team</h4>
              <ul>
                <li>Veeti Hakala</li>
                <li>Mays Al-Azzawi</li>
                <li>Arho Mahlamäki</li>
                <li>Maha Sroor</li>
                <li>Michael Herman</li>
                <li>Onni Roivas</li>
                <li>Adham Naderi</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>React</li>
                <li>NodeJS</li>
                <li>Kubernetes</li>
                <li>GitLab CI/CD</li>
                <li>Docker</li>
                <li>CSC</li>
                <li>MongoDB</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-overflow" />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team')}</p>
          </div>
        </div>
      </section>

      {/* <section className="content__section assignment">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-assignment')}</h2>
            <p>{t('p-assignment')}</p>
            <p>{t('p2-assignment')}</p>
            <p>{t('p3-assignment')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section>

      <section className="content__section assignment">
        <div className="simple-grid">
          <div>
            <Image src={Img4} />
          </div>
          <div>
            <h2>{t('h2-technologies')}</h2>
            <ul>
              <li>
                <b>React</b> – React oli useammalle tiimin jäsenestä tuttu, joten siksi päätimme
                käyttää sitä frontendissä.
              </li>
              <li>
                <b>ASP.NET Core</b> – ASP.NET Core oli myös useammalle tiimin jäsenestä tuttu, joten
                käytimme sitä kielenä backendissä.
              </li>
              <li>
                <b>PostgreSQL</b> – tietokantaan valitsimme PostgreSQL, koska se on nopea laittaa
                pystyyn ja helppo käyttää.
              </li>
              <li>
                <b>Microsoft Power Automate</b> – ajatuksena oli, että Power Automaten käyttö
                muutamissa kohdissa olisi kiva lisäys.
              </li>
              <li>
                <b>Kubernetes & GitLab CI/CD</b> – palvelu on tarkoitus laittaa pyörimään
                Kubernetesin päälle, samalla hyödyntäen gitlabin CI/CD pipelinejä. Mysticons toimi
                tässä asiantuntijana ja ohjeisti meitä.
              </li>
              <li>
                <b>Cypress</b> – aluksi suunnitteilla oli tehdä Robot Frameworkia käyttäen testejä,
                mutta vaihdoimmekin Cypressiin, koska sillä on muun muassa helppoa tehdä testejä.
              </li>
            </ul>
            <p>
              Admin-frontendissä käytetyt teknologiat: Node.js, React, Formik, Axios, Material UI,
              Yup
            </p>
          </div>
        </div>
      </section>

      <section className="content__section challenges">
        <div>
          <h2>{t('h2-challenges')}</h2>
          <h4>{t('h4-challenge1')}</h4>
          <p>{t('p-challenge1')}</p>
          <h4>{t('h4-challenge2')}</h4>
          <p>{t('p-challenge2')}</p>
          <h4>{t('h4-challenge3')}</h4>
          <p>{t('p-challenge3')}</p>
        </div>
      </section>

      <section className="content__section">
        <div className="simple-grid">
          <div></div>
          <div>
            <h2>{t('h2-learned')}</h2>
            <p>{t('p-learned')}</p>
          </div>
        </div>
      </section> */}

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h2 className="h2-centered">{t('h2-introduction')}</h2>
        </div>

        {/* team members */}
        <div className="team-member__wrapper">
          {/* member1 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member1} />
            </div>
            <div>
              <h3>{t('h3-member1')}</h3>
              <h4>{t('h4-member1')}</h4>
              <p>{t('p-member1')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/veetih">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/mays-alazzawi/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member3} />
            </div>
            <div>
              <h3>{t('h3-member3')}</h3>
              <h4>{t('h4-member3')}</h4>
              <p>{t('p-member3')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/arho-mahlam%C3%A4ki-3b9772160/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member4} />
            </div>
            <div>
              <h3>{t('h3-member4')}</h3>
              <h4>{t('h4-member4')}</h4>
              <p>{t('p-member4')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/maha-sroor-1787431b6/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member5} />
            </div>
            <div>
              <h3>{t('h3-member5')}</h3>
              <h4>{t('h4-member5')}</h4>
              <p>{t('p-member5')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/michael-herman81">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member6 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member6} />
            </div>
            <div>
              <h3>{t('h3-member6')}</h3>
              <h4>{t('h4-member6')}</h4>
              <p>{t('p-member6')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/onni-roivas-2a44a1239">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member7 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member7} />
            </div>
            <div>
              <h3>{t('h3-member7')}</h3>
              <h4>{t('h4-member7')}</h4>
              <p>{t('p-member7')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/adham-naderi-a0510a239/">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* social media  */}
      <section>
        <h2 className="h2-centered tweet-h2">{t('h2-twitter')}</h2>
        <div className="twitter-grid">
          <div>
            <Tweet tweetId="1529352000986566659" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'overflow']))
  }
});

export default Overflow;
