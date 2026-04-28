import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import CustomLink from '/components/CustomLink';
import HistoryCard from '/components/HistoryCard';
import HistorySection from '/components/HistorySection';
import Layout, { siteTitle } from '/components/Layout';

import ProfileCard from '../components/ProfileCard';
import ProjectCard from '../components/ProjectCard';
import HeroBg from '../public/assets/home-hero.jpg';
import Logo from '../public/assets/logo_wimma.png';
import IconAgile from '../svgs/icon-agile.svg';
import IconLearn from '../svgs/icon-learn.svg';
import IconNetwork from '../svgs/icon-network.svg';
import IconTeam from '../svgs/icon-team.svg';
import LogoIotitude from '../svgs/logo-iotitude.svg';
import LogoIotitudeSmall from '../svgs/logo-iotitude-sm.svg';
import LogoMysticons from '../svgs/logo-mysticons.svg';
import LogoMysticonsSmall from '../svgs/logo-mysticons-sm.svg';
import LogoOverflow from '../svgs/logo-overflow.svg';
import LogoOverflowSmall from '../svgs/logo-overflow-sm.svg';
import LogoPengwin from '../svgs/logo-pengwin.svg';
import LogoPengwinSmall from '../svgs/logo-pengwin-sm.svg';
import LogoProjectKaiho from '../svgs/project-kaiho.svg';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <Layout t={t}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Hero section */}
      <section className="content__section hero hero--home">
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
          <Image src={Logo} width={160} height={160} priority={true} />
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>

      {/* WIMMA Lab in a nutshell section */}
      <section className="content__section">
        <h2 className="h2-nutshell h2-section">{t('h2-nutshell')}</h2>
        <div className="nutshell__grid-container">
          <div className="nutshell__box">
            <IconLearn className="nutshell__icon" />
            <div className="nutshell__content">
              <h4 className="h3-nutshell-1">{t('h3-nutshell-1')}</h4>
              <p>{t('p-nutshell-1')}</p>
            </div>
          </div>
          <div className="nutshell__box">
            <IconTeam className="nutshell__icon" />
            <div className="nutshell__content">
              <h4 className="h3-nutshell-2">{t('h3-nutshell-2')}</h4>
              <p>{t('p-nutshell-2')}</p>
            </div>
          </div>
          <div className="nutshell__box">
            <IconAgile className="nutshell__icon" />
            <div className="nutshell__content">
              <h4 className="h3-nutshell-3">{t('h3-nutshell-3')}</h4>
              <p>{t('p-nutshell-3')}</p>
            </div>
          </div>
          <div className="nutshell__box">
            <IconNetwork className="nutshell__icon" />
            <div className="nutshell__content">
              <h4 className="h3-nutshell-4">{t('h3-nutshell-4')}</h4>
              <p>{t('p-nutshell-4')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual companies section */}
      <section className="content__section">
        <div className="companies-grid">
          <h2 className="h2-companies h2-section">{t('h2-companies')}</h2>
          <div className="company-logo__wrapper">
            <CustomLink
              href="/iotitude"
              locale="en"
              className="company-logo company-logo--iotitude">
              <span className="visually-hidden">IoTitude</span>
              <LogoIotitude />
            </CustomLink>
            <CustomLink
              href="/mysticons"
              locale="en"
              className="company-logo company-logo--mysticons">
              <span className="visually-hidden">Mysticons</span>
              <LogoMysticons />
            </CustomLink>
            <CustomLink
              href="/overflow"
              locale="en"
              className="company-logo company-logo--overflow">
              <span className="visually-hidden">Overflow</span>
              <LogoOverflow />
            </CustomLink>
            <CustomLink 
              href="/pengwin" 
              locale="en" 
              className="company-logo company-logo--pengwin">
              <span className="visually-hidden">Pengwin Media</span>
              <LogoPengwin />
            </CustomLink>
          </div>
        </div>
      </section>

      {/* Assignments section */}
      <section className="content__section">
        <div>
          <h2 className="h2-assignments h2-section">{t('h2-assignments')}</h2>
          <div className="simple-grid"></div>
          <ProjectCard />
        </div>
      </section>

      {/* Instructors section */}
      <section className="content__section">
        <div>
          <h2 className="h2-instructors h2-section">{t('h2-instructors')}</h2>
          <div className="profile-grid">
            <ProfileCard />
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="content__section">
        <h2 className="text-center">{t('h2-history')}</h2>
        <p className="p-intro">{t('p-big-history')}</p>

        <div className="history">

          <HistorySection year="2022" expanded>
            <HistoryCard
              url="https://www.wimmalab.org/iotitude"
              imgUrl={<LogoIotitudeSmall />}
              isSvg
              title={t('h4-history-2022-1')}
              desc={t('p-history-2022-1')}
            />
            <HistoryCard
              url="https://www.wimmalab.org/overflow"
              imgUrl={<LogoOverflowSmall />}
              isSvg
              title={t('h4-history-2022-2')}
              desc={t('p-history-2022-2')}
            />
            <HistoryCard
              url="https://www.wimmalab.org/mysticons"
              imgUrl={<LogoMysticonsSmall />}
              isSvg
              title={t('h4-history-2022-3')}
              desc={t('p-history-2022-3')}
            />
            <HistoryCard
              url="https://www.wimmalab.org/pengwin"
              imgUrl={<LogoPengwinSmall />}
              isSvg
              title={t('h4-history-2022-4')}
              desc={t('p-history-2022-4')}
            />
            <HistoryCard
              url="https://turkudistillery.com/"
              imgUrl={<LogoProjectKaiho />}
              isSvg
              title={t('h4-history-2022-5')}
              desc={t('p-history-2022-5')}
            />
          </HistorySection>

          <HistorySection year="2021" intro={t('p-history-2021')}>
            <HistoryCard
              url="http://wimmalab2021.pages.labranet.jamk.fi/iotitude/team-template/"
              imgUrl={<LogoIotitudeSmall />}
              isSvg
              title={t('h4-history-2021-1')}
              desc={t('p-history-2021-1')}
            />
            <HistoryCard
              url="https://wimmalab2021.pages.labranet.jamk.fi/overflow/team-template/"
              imgUrl={<LogoOverflowSmall />}
              isSvg
              title={t('h4-history-2021-2')}
              desc={t('p-history-2021-2')}
            />
            <HistoryCard
              url="https://wimmalab2021.pages.labranet.jamk.fi/mysticons/team-template/"
              imgUrl={<LogoMysticonsSmall />}
              isSvg
              title={t('h4-history-2021-3')}
              desc={t('p-history-2021-3')}
            />
            <HistoryCard
              url="https://wimmalab2021.pages.labranet.jamk.fi/pengwin/team-template/"
              imgUrl={<LogoPengwinSmall />}
              isSvg
              title={t('h4-history-2021-4')}
              desc={t('p-history-2021-4')}
            />
          </HistorySection>

          <HistorySection year="2020" intro={t('p-history-2020')} />

          <HistorySection year="2019">
            <HistoryCard
              url="http://wimma-lab-2019.pages.labranet.jamk.fi/iotitude/site/"
              imgUrl="/assets/history/iotitude-logo.png"
              title={t('h4-history-2019-1')}
              desc={t('p-history-2019-1')}
            />
            <HistoryCard
              url="https://wimma-lab-2019.pages.labranet.jamk.fi/overflow/site/"
              imgUrl="/assets/history/overflow-logo.png"
              title={t('h4-history-2019-2')}
              desc={t('p-history-2019-2')}
            />
            <HistoryCard
              url="http://wimma-lab-2019.pages.labranet.jamk.fi/mysticons/site/"
              imgUrl="/assets/history/mysticons-logo.png"
              title={t('h4-history-2019-3')}
              desc={t('p-history-2019-3')}
            />
            <HistoryCard
              url="http://wimma-lab-2019.pages.labranet.jamk.fi/pengwin/site/"
              imgUrl="/assets/history/pengwin-media_logo.jpg"
              title={t('h4-history-2019-4')}
              desc={t('p-history-2019-4')}
            />
          </HistorySection>

          <HistorySection year="2018">
            <HistoryCard
              url="https://www.youtube.com/watch?v=Etb0ojiCAcU"
              imgUrl="/assets/history/iotitude-logo.png"
              title={t('h4-history-2018-1')}
              desc={t('p-history-2018-1')}
            />
            <HistoryCard
              url="https://www.youtube.com/watch?v=UlDXseU_ooQ"
              imgUrl="/assets/history/overflow-logo.png"
              title={t('h4-history-2018-2')}
              desc={t('p-history-2018-2')}
            />
            <HistoryCard
              url="https://www.youtube.com/watch?v=hjyqjsUpaug"
              imgUrl="/assets/history/mysticons-logo.png"
              title={t('h4-history-2018-3')}
              desc={t('p-history-2018-3')}
            />
            <HistoryCard
              url="https://www.youtube.com/watch?v=MJNZGc2jYkc"
              imgUrl="/assets/history/pengwin-media_logo.jpg"
              title={t('h4-history-2018-4')}
              desc={t('p-history-2018-4')}
            />
          </HistorySection>

          <HistorySection year="2017" intro={t('p-big-history-2017')}>
            <HistoryCard
              url="https://wimmalab.github.io/iotitude/"
              imgUrl="/assets/history/iotitude-logo.png"
              title={t('h4-history-2017-1')}
              desc={t('p-history-2017-1')}
            />
            <HistoryCard
              url="https://wimmalab.github.io/overflow/"
              imgUrl="/assets/history/overflow-logo.png"
              title={t('h4-history-2017-2')}
              desc={t('p-history-2017-2')}
            />
            <HistoryCard
              url="https://wimmalab.github.io/mysticons/"
              imgUrl="/assets/history/mysticons-logo.png"
              title={t('h4-history-2017-3')}
              desc={t('p-history-2017-3')}
            />
            <HistoryCard
              url="https://wimmalab.github.io/pengwingame/"
              imgUrl="/assets/history/pengwin-game_logo.jpg"
              title={t('h4-history-2017-4')}
              desc={t('p-history-2017-4')}
            />
            <HistoryCard
              url="https://wimmalab.github.io/pengwinmedia/"
              imgUrl="/assets/history/pengwin-media_logo.jpg"
              title={t('h4-history-2017-5')}
              desc={t('p-history-2017-5')}
            />
          </HistorySection>

          <HistorySection year="2016" intro={t('p-big-history-2016')}>
            <HistoryCard
              url="https://iotitude.github.io/"
              imgUrl="/assets/history/iotitude-logo.png"
              title={t('h4-history-2016-1')}
              desc={t('p-history-2016-1')}
            />
            <HistoryCard
              url="https://overflowjamk.github.io/"
              imgUrl="/assets/history/overflow-logo.png"
              title={t('h4-history-2016-2')}
              desc={t('p-history-2016-2')}
            />
            <HistoryCard
              url="http://kumos.github.io/"
              imgUrl="/assets/history/kumos-logo.png"
              title={t('h4-history-2016-3')}
              desc={t('p-history-2016-3')}
            />
          </HistorySection>

          <HistorySection year="2015">
            <HistoryCard
              url="http://n4sjamk.github.io/contriboard/"
              imgUrl="/assets/history/contriboard_logo.png"
              title={t('h4-history-2015-1')}
              desc={t('p-history-2015-1')}
            />
            <HistoryCard
              url="https://n4sjamk.github.io/jarmo/"
              imgUrl="/assets/history/jarmo_logo.png"
              title={t('h4-history-2015-2')}
              desc={t('p-history-2015-2')}
            />
            <HistoryCard
              url="https://n4sjamk.github.io/challenge-factory-2015.html"
              imgUrl="/assets/history/noise_logo.png"
              title={t('h4-history-2015-3')}
              desc={t('p-history-2015-3')}
            />
          </HistorySection>

          <HistorySection year="2014" intro={t('p-big-history-2014')}>
            <HistoryCard
              url="https://n4sjamk.github.io/challenge-factory-2014.html"
              imgUrl="/assets/history/toolbar_logo.png"
              title={t('h4-history-2014')}
              desc={t('p-history-2014')}
            />
          </HistorySection>

          <HistorySection year="2011-2013" intro={t('p-big-history-2011-2013')}>
            <HistoryCard
              url="https://github.com/FreeNest"
              imgUrl="/assets/history/freenest_logo.png"
              title={t('h4-history-2011-2013')}
              desc={t('p-history-2011-2013')}
            />
          </HistorySection>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
});

export default Home;
