import { useEffect, useRef, useState } from 'react';
import Icons from '../../assets/svg/sprite.svg';
import Typed from 'typed.js';
import nmbarramundi from '../../assets/musicians/nmbarramundi.webp';
import kristjan from '../../assets/musicians/kristjan.webp';
import dyvour from '../../assets/musicians/dyvour.webp';
import coffinDodger from '../../assets/musicians/coffin-dodger.webp';
import barramundiBg from '../../assets/backgrounds/bg-barramundi.webp';
import devourBg from '../../assets/backgrounds/bg-devour.webp';
import kristjanBg from '../../assets/backgrounds/bg-kristjan.webp';
import coffinDodgerBg from '../../assets/backgrounds/bg-coffin-dodger.webp';
import shape3 from '../../assets/shapes/3.webp';
import shape4 from '../../assets/shapes/4.webp';
import { useSpring, animated } from '@react-spring/web';

const musicians = [
  {
    name: 'NM Barramundi',
    nameStar: 'NM ✱ Barramundi',
    image: nmbarramundi,
    link: `https://open.spotify.com/artist/1Ki9n7WV9D8rwLQoWUgdjS?si=AZ-Ui8-eTru2PsYfBEMzPA`,
    text1: `Growing up in the quiet village of Kurna, Estonia, NM Barramundi always knew isolation and managed to turn it into an art form. Despite being a straight-A student with a million hobbies, he felt distant, longing for a neighbor’s kid to hang with. That restlessness brewed a creative fire, one that first took shape in rap.`,
    text2: `After a rough start (recording his first song on a Call of Duty mic in 9th grade), Mundi found his stride in high school after teaming up with producer Hugo. Their first album Madu may not have been perfect, but it caught the attention of DEW8, who recognized his raw talent and pushed him to take music seriously.`,
    text3: `NM Barramundi’s breakthrough came when his track “Mitsubishi Freestyle”, featuring Coffin Dodger, got top marks on Estonia’s Muusikanõunikud, earning him the title of "critically acclaimed" by his friends. His sound is shaped by Kanye West, Earl Sweatshirt, and Jpegmafia, but the result is always unmistakably his own and evolves with every track, from raw bangers to introspective, melodic beats. His latest EP Robotnik is an ironic, dystopian story about a world of abused robots. It’s not something to describe - it must be listened to. `,
    text4: `Performing live is where Mundi truly thrives. He lives for that moment when the crowd belts out a chorus so loud that it startles even him. He’s working on new singles, considering a shift to R&B, and new ways to connect with fans. One thing’s certain: NM Barramundi is just getting started.`,
    bg: 0,
  },
  {
    name: 'Dyvour',
    nameStar: 'Dyvour ✱',
    image: dyvour,
    link: `https://open.spotify.com/artist/4s8QBLbKQfVyxBBFKici0O?si=swYiWnOAT4aUf8d_GBo1Xw`,
    text1: `Dyvour's music is a reflection of the contrasts in his life: isolation mixed with the chaos of internet culture. Growing up far from the hustle and bustle of the city allowed him the space to dive deep into online music. “Internet culture is a large part of how I found more and more weird and interesting music that expanded my taste and interest in the art form."`,
    text2: `His music journey didn’t begin with a grand ambition - it started with a moment of awe. Back in 2014, he saw a performance by Twenty One Pilots at the MTV Movie Awards. Fast forward to 2019, Dyvour finally got to see them live, which was the moment he still credits as a major inspiration for his own stage presence today.`,
    text3: `The name “Dyvour” comes from a random scroll through CIA cryptonyms, meaning a bankrupt man. But for him, it’s not about financial debt. “I personally relate it to being creatively bankrupt, as I feel like I’m an amalgamation of influences and stolen ideas. Originality is something I strive for, although true originality is near-impossible, but that’s just how I feel.”`,
    text4: `Dyvour’s sound is a genre-defying mix of electronic, alternative, emo, and experimental. He doesn’t like being pinned down and believes that every new project deserves its own identity. One of his standout moments as an artist was the release concert for his album Dog Dreams, where he brought his most ambitious ideas to life on stage.For Dyvour, music is about making people feel something, anything. “I can’t dictate how someone should feel. But as long as my music makes them feel, that’s enough for me.”`,
    bg: 1,
  },
  {
    name: 'Kristjan Glück',
    nameStar: 'Kristjan ✱ Glück',
    image: kristjan,
    link: `https://open.spotify.com/artist/4wlGofpoCx983N0ts4JOMi?si=0Emh9umAT-mw_q44PshLRw`,
    text1: `Kristjan Glück is a self-taught experimental musician who's never content to stick with one style, but rather constantly evolving, exploring complex issues in his songs and staying unapologetically true to himself. His last three albums (trilogy) are a great way to understand his growth and journey both as a musician and as a person.`,
    text2: `Growing up, music was more of a backdrop until something clicked. “I became obsessed with the details of production and beatmaking,” he says. That obsession led to late-night sessions, experimenting with sound, and learning music theory on his own terms.`,
    text3: `Kristjan Glück’s music is a mix of experimentation and Estonian nostalgia, combined with folklore vibes and sharp lyrics. His latest album, Verekuu serenaad, consists of multi-genre tracks that explore the issues of confidence, ego, and chaos.`,
    text4: `His live performances are raw energy and emotion. “The last three songs of my concert in Kidrakuur were an amazing, hype, and sweaty experience,” he says. And when it comes to fans, Kristjan doesn’t do barriers - he views his fans as friends, emphasizing that there should be no line dividing artists from their listeners. Looking ahead, Kristjan is excited about his collaboration with Converse All Stars, Class of 2025. It’s yet another adventure in a career built on exploration and connection, and for Kristjan, it’s only the beginning.`,
    bg: 2,
  },
  {
    name: 'Coffin-Dodger',
    nameStar: 'Coffin-Dodger ✱',
    image: coffinDodger,
    link: `https://open.spotify.com/artist/5MOVd3pBi5wiI5K60vy6zR?si=N3dedGlRSBG9m5uQG1ovJQ`,
    text1: `Coming out of the gritty streets of Lasnamäe, Tallinn, coffin-dodger Is a shape-shifting force in the underground music scene. His Journey Isn't the classic story of growing up in a musically driven household. In fact, music was barely a thing in his family, but sometimes it's not about where you start - It's about where you end up. Dodger's path took him from acoustic guitar sessions in high school to a raw, experimental lane of hip-hop. "I started writing songs 'cause no one else would rap on my beats."`,
    text2: `For about five years, coffin-dodger has been relentlessly dropping tracks that involve samples of nearly every genre, whether It's folk, Indle, hyperpop, or rap. There's no box big enough to contain his sound.`,
    text3: `His latest project, Dynamo, is a beast of its own. Wacky auto-tune, unpredictable lyrics, and a level of distortion that smashes through any preconceived expectations. coffin-dodger doesn't create music for approval, but if it sticks with you (whether you love it or hate it) - he's done his job.`,
    text4: `And what's next? A collaboration with fellow Estonian underground names Kreemikast and NM Barramundi, as well as a live show that promises to be as unpredictable as his discography. It's all about forward momentum for coffin-dodger. Ever-changing and evolving.`,
    bg: 3,
  },
];

const musiciansBgs = [barramundiBg, devourBg, kristjanBg, coffinDodgerBg];

export const OurMusicians = () => {
  const [selectedMusician, setSelectedMusician] = useState(musicians[0]);
  const [fade, setFade] = useState(false);

  const handlePersonChange = async (musician) => {
    setFade(true);

    await setTimeout(() => {
      setSelectedMusician(musician);

      setTimeout(() => {
        setFade(false);
      }, 400);
    }, 400);
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [`${selectedMusician.nameStar}`],
      typeSpeed: 40,
      loop: true,
      backDelay: 4000,
      backSpeed: 20,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [selectedMusician]);

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
    <section className="our-musicians">
      <animated.img
        style={styles}
        className="our-musicians-shape4"
        src={shape4}
      />
      <div
        className={`our-musicians_card-bg ${fade ? 'fade-out' : 'fade-in'}`}
        style={{
          backgroundImage: `url(${musiciansBgs[selectedMusician.bg]})`,
        }}
      ></div>
      <div className="container relative">
        <img
          className={`our-musicians-shape3 ${fade ? 'fade-out' : 'fade-in'}`}
          src={shape3}
        />
        <span id="our-musicians" className="navigation-label">
          {'[The faces of the underground]'}
        </span>

        <div className="our-musicians-spacing">
          <div
            className={`our-musicians_card ${fade ? 'fade-out' : 'fade-in'}`}
          >
            <div className="our-musicians_card-container">
              <img
                className="our-musicians_card-image"
                src={selectedMusician.image}
                alt="Photo of Musician"
              />
              <div className="our-musicians_card-info">
                <span ref={el} className="our-musicians_card-info_name"></span>
                <span className="our-musicians_card-info_date">2024</span>
              </div>
              <a
                className="our-musicians_card-button"
                href={selectedMusician.link}
                target="blank"
              >
                Listen On
                <svg className="our-musicians_card-button-svg">
                  <use
                    href={`${Icons}#spotify`}
                    width="30px"
                    height="30px"
                  ></use>
                </svg>
              </a>
              <span className="navigation-label">{'[OUR MUSICIANS]'}</span>
            </div>

            <div className="our-musicians_card-text-container">
              <p className="our-musicians_card-text">
                {selectedMusician.text1}
              </p>
              <p className="our-musicians_card-text">
                {selectedMusician.text2}
              </p>
              <p className="our-musicians_card-text">
                {selectedMusician.text3}
              </p>
              <p className="our-musicians_card-text">
                {selectedMusician.text4}
              </p>
            </div>
          </div>

          <div className="our-musicians_names">
            {musicians.map((musician) => (
              <div
                className={`our-musicians_name ${
                  selectedMusician.name === musician.name ? 'active' : ''
                }`}
                key={musician.name}
                onMouseEnter={() => handlePersonChange(musician)}
                onClick={() => handlePersonChange(musician)}
              >
                {musician.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
