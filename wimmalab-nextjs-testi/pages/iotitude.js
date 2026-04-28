import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member1 from '/public/assets/iotitude/Ruusu.jpg';
import member2 from '/public/assets/iotitude/Joonas.jpg';
import member3 from '/public/assets/iotitude/Petteri.jpg';
import member4 from '/public/assets/iotitude/Roman.jpg';
import member5 from '/public/assets/iotitude/Tomi.jpg';
import member6 from '/public/assets/iotitude/Joni.jpg';
import member7 from '/public/assets/iotitude/Herkko.jpg';
import team from '/public/assets/iotitude/IoTitude-tiimi.jpg';

// import Img4 from '../public/assets/software.png';
import IotitudeLogo from '../svgs/logo-iotitude.svg';

const Iotitude = () => {
  const { t } = useTranslation('iotitude');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--iotitude margin-b">
        <div className="hero__container">
          <IotitudeLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Team</h4>
              <ul>
                <li>Ruusu Walkeajärvi</li>
                <li>Joonas Himmanen</li>
                <li>Petteri Kovanen</li>
                <li>Roman Kiuru</li>
                <li>Tomi Hyvärinen</li>
                <li>Joni Laukka</li>
                <li>Herkko Mehtälä</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>React</li>
                <li>TypeScript</li>
                <li>Robot Framework</li>
                <li>Kubernetes</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>GitLab CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-iotitude" />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team')}</p>
          </div>
        </div>
      </section>

      {/* <section className="content__section technologies">
        <div className="simple-grid">
          <div className="virtual-card virtual-card--iotitude">
            <h2>{t('h2-technologies')}</h2>
            <p>{t('p-technologies')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section> */}

      {/* <section className="content__section challenges">
        <div className="simple-grid">
          <div className="virtual-card virtual-card--cyan-light">
            <h2>{t('h2-challenges')}</h2>
            <p>{t('p-challenges')}</p>
          </div>
          <div className="virtual-card virtual-card--cyan-light">
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
          <div className="virtual-card virtual-card--iotitude">
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
                href="
                https://www.linkedin.com/in/ruusu-walkeajärvi-83b7b0192">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--iotitude">
            <div className="profile-image">
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2-1')}</p>
              <p>{t('p-member2-2')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/joonas-himmanen-913a2a165/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/petteri-kovanen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/roman-kiuru/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--iotitude">
            <div className="profile-image">
              <Image src={member5} />
            </div>
            <div>
              <h3>{t('h3-member5')}</h3>
              <h4>{t('h4-member5')}</h4>
              <p>{t('p-member5-1')}</p>
              <p>{t('p-member5-2')}</p><br></br>
              <p>{t('p-member5-3')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/tomi-hyva/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member6 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/joni-laukka/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member7 */}
          <div className="virtual-card virtual-card--iotitude">
            <div className="profile-image">
              <Image src={member7} />
            </div>
            <div>
              <h3>{t('h3-member7')}</h3>
              <h4>{t('h4-member7')}</h4>
              <p>{t('p-member7')}</p>
              <ul>
                <li>CTF, bug bounty and ethical hacking</li>
                <li>Docker, Kubernetes, automation</li>
                <li>Volunteering and tutoring</li>
              </ul>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/herkko-mehtala/">
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
            <Tweet tweetId="1530119624133574658" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'iotitude']))
  }
});

export default Iotitude;
