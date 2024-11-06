import { useEffect, useRef } from 'react';
import Icons from '../../assets/svg/sprite.svg';
import Typed from 'typed.js';
import rotatingShape from '../../assets/shapes/5.webp';
import { useInView, animated, useSpring } from '@react-spring/web';

export const WorkWithUs = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['we want you! hit us up and join the squad!'],
      typeSpeed: 30,
      loop: true,
      backDelay: 5000,
      backSpeed: 20,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const styles1 = useSpring({
    loop: true,
    to: [
      {
        transform: 'translateY(-20px)',
      },
      {
        transform: 'translateY(0px)',
      },
    ],
    from: {
      transform: 'translateY(0px)',
    },
    config: { duration: 1500, easing: (t) => t },
  });

  const [ref, styles] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 500,
        filter: 'blur(20px) drop-shadow(30px 10px crimson) ',
      },
      to: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px) drop-shadow(0px 0px crimson)',
      },
    }),
    {
      rootMargin: '0% 0%',
    }
  );

  return (
    <section className="workWithUs container">
      <animated.img
        style={styles1}
        src={rotatingShape}
        className="work-with-us-shape5"
      ></animated.img>
      <span className="navigation-label">{'[work with us]'}</span>
      <animated.div
        ref={ref}
        style={styles}
        className="workWithUs-titles__wrapper"
      >
        <h2 className="transitionLeft workWithUs-title">
          <span className="workWithUs-title__span">got {'[beats]'}?</span>
          <span ref={el} />
        </h2>
      </animated.div>

      <a
        href="https://linktr.ee/musick.project"
        target="blank"
        className="workWithUs-btn"
      >
        contact us
        <svg className="workWithUs-icon">
          <use href={`${Icons}#contact`} width="100%" height="100%"></use>
        </svg>
      </a>
    </section>
  );
};
