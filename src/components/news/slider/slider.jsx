import placeholder from '../../../assets/backgrounds/event-text-card.webp';
import spotifyPost from '../../../assets/backgrounds/spotify-post.webp';
import instaPost from '../../../assets/backgrounds/instapost.webp';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Icons from '../../../assets/svg/sprite.svg';

const newsData = [
  {
    name: 'spotify-post',
    image: spotifyPost,
    link: `https://open.spotify.com/playlist/4g4XawS5tTHpPTGFHkEEGY?si=ANYIXh9mROSLF9fB-cRwLg&pi=e-5M3ULAeYRNiP`,
    textHeader: `THE MÜ-SICK SPOTIFY PLAYLIST`,
    text: `We’ve collected a wide variety of everything we have to offer just for your listening pleasure.`,
  },
  {
    name: 'instapost',
    image: instaPost,
    link: `https://linktr.ee/musick.project`,
    textHeader: `Check our Linktree`,
    text: `This ain’t your average music project. WE ARE MÜ-SICK and we’re here to mess things up in the best way possible. Our project is about bringing you the wildest, most experimental musicians doing shit their way. `,
  },
  {
    name: 'documentary',
    image: placeholder,
    link: null,
    textHeader: `MÜ-SICK Documentary`,
    text: `COMING SOON...`,
  },
];

export const NewsSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToscroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {newsData.map((item) => (
          <a
            href={`${item.link}`}
            target="blank"
            key={item.name}
            className="slider_card"
          >
            <img src={item.image} className="slider_image" />
            <div className="slider_text-block">
              <div>
                <h3 className="slider_text-header">{item.textHeader}</h3>
                <p className="slider_text-info">{item.text}</p>
              </div>
              <span className="slider_text-date">
                <pre>{'25.09.2024    MÜ-SICK'}</pre>
              </span>
            </div>
            <svg className="news-logo">
              <use href={`${Icons}#news`} width="100%" height="100%"></use>
            </svg>
          </a>
        ))}
      </Slider>
    </div>
  );
};
