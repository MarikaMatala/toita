import Link from 'next/link';
import { useRouter } from 'next/router';

import CustomLink from '/components/CustomLink';

import ArrowRight from '../svgs/arrow-right-sm.svg';
import IconFacebook from '../svgs/socials-facebook.svg';
import IconInstagram from '../svgs/socials-instagram.svg';
import IconLinkedIn from '../svgs/socials-linkedin.svg';
import IconTwitter from '../svgs/socials-twitter.svg';
import IconYouTube from '../svgs/socials-youtube.svg';
/* import ActiveLink from './ActiveLink'; */

export default function NavMenu({ t, active, handleClick }) {
  const router = useRouter();

  function changeLanguage(e) {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  }

  return (
    <nav role="navigation">
      <div className="desktop-menu">
        <ul className="desktop-menu__links">
        <li>
            <div>
              <a href="/">{t('home')}</a>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="/students" className="dropbtn">{t('students')}</a>
              <div className="dropdown-content">
                <a href="/students#application_process">{t('application-process')}</a>
                <a href="/students#roles">{t('roles')}</a>
                <a href="/students#course_timeline">{t('course-timeline')}</a>
                <a href="/students#faq">Q&A</a>
                <a href="/students#testimonials">{t('testimonials')}</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a href="/companies" className="dropbtn">{t('companies')}</a>
              <div className="dropdown-content">
                <a href="/companies#why">{t('why-work-with-us')}</a>
                <a href="/companies#how">{t('how-to-get-involved')}</a>
                <a href="/companies#events">{t('events-with-wimma-lab')}</a>
                <a href="/companies#contact">{t('get-in-touch')}</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <a className="guides-link dropbtn" href="/guides">
                {t('guides')}
                <ArrowRight />
              </a>
              <div className="dropdown-content">
                <a href="/guides/Black-Book-en">Black Book 1.2</a>
                <a href="/guides/Green-Book">Green Book 2.0</a>
                <a href="/guides/Purple-Book">Purple Book 1.0</a>
              </div>
            </div>
          </li>
        </ul>
        <ul className="desktop-menu__locale">
          <li>
            <select onChange={changeLanguage} defaultValue={router.locale}>
              <option value="fi">FI</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <div className={`mobile-menu__container ${active ? 'open' : ''}`}>
          <div className="mobile-menu__container-links">
            <ul className="mobile-menu__main-links">
              <li>
                <Link href="/">
                  <a>{t('home')}</a>
                </Link>
              </li>
              <li>
                <Link href="/students">
                  <a>{t('students')}</a>
                </Link>
              </li>
              <li>
                <Link href="/companies">
                  <a>{t('companies')}</a>
                </Link>
              </li>
              <li>
                <Link href="/guides" locale="fi">
                  <a>{t('guides')}</a>
                </Link>
              </li>
            </ul>
            <ul className="mobile-menu__team-links">
              <li>
                <Link href="/iotitude" locale="fi">
                  <a>IoTitude</a>
                </Link>
              </li>
              <li>
                <Link href="/mysticons" locale="fi">
                  <a>Mysticons</a>
                </Link>
              </li>
              <li>
                <Link href="/overflow" locale="fi">
                  <a>Overflow</a>
                </Link>
              </li>
              <li>
                <Link href="/pengwin" locale="fi">
                  <a>Pengwin Media</a>
                </Link>
              </li>
            </ul>
            <ul className="mobile-menu__locale-links">
              <li>
                <Link href={router.route} locale={router.locale === 'fi' ? 'en' : 'fi'}>
                  <a>{t('change-locale')}</a>
                </Link>
              </li>
            </ul>
            <div className="mobile-menu__container-socials">
              <ul className="mobile-menu__social-links">
                <li>
                  <CustomLink href="https://www.facebook.com/wimmalab">
                    <IconFacebook />
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="https://www.instagram.com/wimmalab">
                    <IconInstagram />
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="https://www.linkedin.com/company/wimmalab">
                    <IconLinkedIn />
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="https://www.youtube.com/channel/UCe0Ssog7DURm_aTiPO2hUFw">
                    <IconYouTube />
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="https://twitter.com/wimmalab">
                    <IconTwitter />
                  </CustomLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button aria-label="Menu" onClick={handleClick} className="mobile-menu__button">
          <div className="hamburger__wrapper">
            <div className={`hamburger ${active ? 'animate' : ''}`}></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
