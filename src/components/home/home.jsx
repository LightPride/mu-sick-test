import musick from '../../assets/styled-words/mu-sick.webp';
import arrow from '../../assets/arrow.webp';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'This isn’t just music It’s a fucking<br/>revolution. Are you ready?',
      ],
      typeSpeed: 30,
      loop: true,
      backDelay: 3000,
      backSpeed: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="home">
      <div className="container">
        <div className="home_cta">
          <span ref={el} className="home_cta-text"></span>
          <a href="#pre-register" className="home_cta-button">
            <span className="home_cta-button-text">Pre-register</span>
          </a>
        </div>
        <div className="home_middle-block">
          <img className="home_middle-block-image" src={musick} alt="mu-sick" />
          <span className="home_middle-block-text1">
            Welcome to the community where your music taste won’t make you an
            outsider. This is a space for musicians who dare to be different and
            for listeners who crave something real. If you’re sick of the same
            old radio-appropriate beats, you’re in the right place.
          </span>
          <div className="text2">
            <span className="home_middle-block-text2">
              We’re bringing the experimental stuff. The alternative stuff. The
              underground stuff.
            </span>
            <img className="home_middle-block-arrow" src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
