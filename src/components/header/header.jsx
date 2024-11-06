import { useState, useEffect, useCallback } from 'react';
import Icons from '../../assets/svg/sprite.svg';

const navItems = [
  { href: '#home', text: 'Home' },
  { href: '#about-event', text: 'About & Event' },
  { href: '#our-musicians', text: 'Our musicians' },
  { href: '#news', text: 'News' },
  { href: '#our-team', text: 'Our team' },
];

export const Header = () => {
  const [visible, setVisible] = useState(false);

  const viewport = window.innerWidth;

  const handleScroll = useCallback(() => {
    const currentScrollPosition = document.documentElement.scrollTop;

    if (viewport > 767 && currentScrollPosition > 0) {
      setVisible(false);
    }
  }, [viewport]);

  useEffect(() => {
    if (viewport > 767) {
      setVisible(true);
    }
  }, [viewport]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (viewport < 768 && visible) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  }, [visible, viewport]);

  return (
    <>
      <header
        className={`header ${visible ? 'header__visible' : 'header__hidden'}`}
      >
        <div className="container">
          <button
            className={`header-exit_btn ${
              visible ? 'header-btn__visible' : 'header-btn__hidden'
            }`}
            onClick={() => setVisible(false)}
          >
            <svg className="header-exit_btn__icon">
              <use href={`${Icons}#exit`} width="100%" height="100%"></use>
            </svg>
          </button>

          <div>
            <svg className="header-logo">
              <use href={`${Icons}#logo`} width="100%" height="100%"></use>
            </svg>
          </div>

          <nav className="nav-bar">
            <ul className="header-nav__list">
              {navItems.map((item, index) => (
                <li className="header-nav__item" key={index}>
                  <a
                    href={item.href}
                    className="header-nav__link"
                    onClick={() => setVisible(false)}
                  >
                    <span className="header-nav__bracket">{'[ '}</span>
                    <span className="header-nav__bracket">{'] '}</span>
                    <span className="header-nav__text">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-social__list">
            <a
              href="https://www.instagram.com/musick.project"
              target="blank"
              onClick={() => setVisible(false)}
            >
              <svg className="header-social__icon">
                <use
                  href={`${Icons}#instagram`}
                  width="100%"
                  height="100%"
                ></use>
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@musick.project"
              target="blank"
              onClick={() => setVisible(false)}
            >
              <svg className="header-social__icon">
                <use href={`${Icons}#tiktok`} width="100%" height="100%"></use>
              </svg>
            </a>

            <a
              href="https://open.spotify.com/playlist/4g4XawS5tTHpPTGFHkEEGY?si=ANYIXh9mROSLF9fB-cRwLg&pi=e-5M3ULAeYRNiP"
              target="blank"
              onClick={() => setVisible(false)}
            >
              <svg className="header-social__icon">
                <use href={`${Icons}#spotify`} width="100%" height="100%"></use>
              </svg>
            </a>

            <span className="header-social__span">say hello!</span>
          </div>
        </div>
      </header>

      <div className="header-btn__mobile_wrapper container">
        <svg
          className={`header-logo__mobile ${
            visible ? 'header-btn__hidden' : 'header-btn__visible'
          }`}
        >
          <use href={`${Icons}#logo`} width="100%" height="100%"></use>
        </svg>

        <button
          className={`header-btn ${
            visible ? 'header-btn__hidden' : 'header-btn__visible'
          }`}
          onClick={() => setVisible(true)}
        >
          <span>↓</span>
          <svg className="header-btn__icon">
            <use href={`${Icons}#burger`} width="100%" height="100%"></use>
          </svg>
        </button>
      </div>
    </>
  );
};
