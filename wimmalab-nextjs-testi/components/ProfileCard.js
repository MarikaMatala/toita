import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import SocialIcon from '../svgs/socials-linkedin.svg';

export default function ProfileCard() {
  const { t } = useTranslation('home');
  return (
    <div className="instructors">
      <div className="instructors__card">
        <div className="instructors__img">
          <Image
            src="/assets/narsu.png"
            alt="Marko Rintamäki"
            width="180"
            height="180"
            className={'instructors__img'}
          />
        </div>
        <div className="instructors__caption">
          <h4 className="h4-instructors-1">{t('h4-instructors-1')}</h4>
          <span className="p-instructors-1">{t('p-instructors-1')}</span>
          <a href="https://www.linkedin.com/in/narsuman/">
            <SocialIcon className="instructors__social" />
          </a>
        </div>
      </div>

      <div className="instructors">
        <div className="instructors__card">
          <div className="instructors__img">
            <Image
              src="/assets/eliel.jpg"
              alt="Eliel Taskinen"
              width="180"
              height="180"
              className={'instructors__img'}
            />
          </div>
          <div className="instructors__caption">
            <h4 className="h4-instructors-2">{t('h4-instructors-2')}</h4>
            <span className="p-instructors-2">{t('p-instructors-2')}</span>
            <a href="https://www.linkedin.com/in/eliel-taskinen/">
              <SocialIcon className="instructors__social" />
            </a>
          </div>
        </div>
      </div>

      <div className="instructors">
        <div className="instructors__card">
          <div className="instructors__img">
            <Image
              src="/assets/paavo.png"
              alt="Paavo Nelimarkka"
              width="180"
              height="180"
              className={'instructors__img'}
            />
          </div>
          <div className="instructors__caption">
            <h4 className="h4-instructors-3">{t('h4-instructors-3')}</h4>
            <span className="p-instructors-3">{t('p-instructors-3')}</span>
            <a href="https://www.linkedin.com/in/paavonelimarkka/">
              <SocialIcon className="instructors__social" />
            </a>
          </div>
        </div>
      </div>

      <div className="instructors">
        <div className="instructors__card">
          <div className="instructors__img">
            <Image
              src="/assets/kari.png"
              alt="Kari Pitkämäki"
              width="180"
              height="180"
              className={'instructors__img'}
            />
          </div>
          <div className="instructors__caption">
            <h4 className="h4-instructors-4">{t('h4-instructors-4')}</h4>
            <span className="p-instructors-4">{t('p-instructors-4')}</span>
            <a href="https://www.linkedin.com/in/kari-pitkäniemi-9000b31a4/">
              <SocialIcon className="instructors__social" />
            </a>
          </div>
        </div>
      </div>

      <div className="instructors">
        <div className="instructors__card">
          <div className="instructors__img">
            <Image
              src="/assets/teemu.png"
              alt="Teemu Kontio"
              width="180"
              height="180"
              className={'instructors__img'}
            />
          </div>
          <div className="instructors__caption">
            <h4 className="h4-instructors-5">{t('h4-instructors-5')}</h4>
            <span className="p-instructors-5">{t('p-instructors-5')}</span>
            <a href="https://www.linkedin.com/in/teemukontio/">
              <SocialIcon className="instructors__social" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
