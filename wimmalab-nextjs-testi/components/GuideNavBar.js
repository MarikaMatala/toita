import Link from 'next/link';

import Logo from '../svgs/logo-sm.svg';
import ArrowRight from '../svgs/arrow-right-sm.svg';

export default function GuideNavBar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link href="/">
          <a className="navbar__logo" aria-label="home">
            <Logo width="40" height="20" />
          </a>
        </Link>
        <nav role="navigation">
          <div className="desktop-menu">
            <ul className="desktop-menu__links">
              <li>
                <div>
                  <a href="/">Home</a>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <a href="/students" className="dropbtn">Students</a>
                  <div className="dropdown-content">
                    <a href="/students#application_process">Application process</a>
                    <a href="/students#roles">Roles</a>
                    <a href="/students#course_timeline">Course timeline</a>
                    <a href="/students#faq">Q&A</a>
                    <a href="/students#testimonials">Testimonials</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <a href="/companies" className="dropbtn">Companies</a>
                  <div className="dropdown-content">
                    <a href="/companies#why">Why work with us</a>
                    <a href="/companies#how">How to get involved</a>
                    <a href="/companies#events">Events with WIMMA Lab</a>
                    <a href="/companies#contact">Get in touch</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown">
                  <a className="guides-link dropbtn" href="/guides">
                    Guides
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
          </div>
        </nav>
      </div>
    </div>
  );
}
