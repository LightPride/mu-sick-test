import { useInView, animated, useSpring } from '@react-spring/web';
import welcomeToTheChaos from '../../assets/styled-words/welcome-to-the-chaos.webp';

export const About = () => {
  const [ref1, inView1] = useInView();
  const styles1 = useSpring({
    opacity: inView1 ? 1 : 0,
    transform: inView1 ? 'translateY(0px)' : 'translateY(200px)',
    config: { tension: 200, friction: 30 },
  });

  const [ref2, inView2] = useInView();
  const styles2 = useSpring({
    filter: inView2 ? 'blur(0px)' : 'blur(40px)',
    transform: inView2
      ? 'translateY(0px) scale(1)'
      : 'translateY(150px) scale(0.7)',
    config: { tension: 200, friction: 30 },
  });

  return (
    <div className="container about">
      <span id="about-event" className="navigation-label">
        {'[about]'}
      </span>
      <div className="about-block-text">
        <animated.img
          ref={ref1}
          style={styles1}
          className="autoShow about_image autoShowByScroll"
          src={welcomeToTheChaos}
          alt="welcome"
        />
        <animated.span
          ref={ref2}
          style={styles2}
          className="autoBlur about_text1"
        >
          We know how long you’ve been craving authenticity, and we are here to
          bring raw, experimental beats straight to your ears. We’re not just
          another music project; we’re a goddamn revolution in the underground
          music scene.
        </animated.span>
        <animated.span
          ref={ref2}
          style={styles2}
          className="autoBlur about_text2"
        >
          We are a complex multi-platform project, and right now you are
          exploring one of our platforms. Our Instagram and TikTok should be
          next on your list, followed by our documentary that’s coming out very
          soon. But what kind of music project would we be if we didn’t have a
          proper gig?
        </animated.span>
      </div>
      <hr id="pre-register" className="line" />
    </div>
  );
};
