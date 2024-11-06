import { NewsSlider } from './slider/slider';
import shape6 from '../../assets/shapes/6.webp';
import shape7 from '../../assets/shapes/7.webp';
import { useSpring, animated } from '@react-spring/web';
export const News = () => {
  const styles = useSpring({
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
  return (
    <div className="news">
      <animated.img style={styles} className="news-shape6" src={shape6} />
      <animated.img style={styles} className="news-shape7" src={shape7} />
      <div className="container">
        <span id="news" className="navigation-label">
          {'[News]'}
        </span>
        <NewsSlider />
      </div>
    </div>
  );
};
