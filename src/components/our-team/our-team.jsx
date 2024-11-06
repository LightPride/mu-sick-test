import Icons from '../../assets/svg/sprite.svg';
import vlad from '../../assets/team/vlad.webp';
import iryna from '../../assets/team/iryna.webp';
import ava from '../../assets/team/ava.webp';
import andrii from '../../assets/team/andrii.webp';
import taras from '../../assets/team/taras.webp';
import bren from '../../assets/team/bren.webp';

export const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container">
        <h2 className="dropShadow our-team_header">
          Meet the Chaos
          <span id="our-team" className="our-team_header-accent">
            {' '}
            Gremlins
          </span>{' '}
          <br /> Behind This Project
        </h2>
        {window.innerWidth >= 1440 && (
          <div className="our-team_list">
            <div className="our-team_list-item">
              <img src={iryna} alt="" className="our-team_list-image" />
            </div>

            <div className="our-team_list-item">
              <img src={andrii} alt="" className="our-team_list-image" />
            </div>

            <div className="our-team_list-item">
              <img src={bren} alt="" className="our-team_list-image" />
            </div>

            <div className="our-team_list-item">
              <img src={taras} alt="" className="our-team_list-image" />
            </div>

            <div className="our-team_list-item">
              <img src={vlad} alt="" className="our-team_list-image" />
            </div>

            <div className="our-team_list-item">
              <img src={ava} alt="" className="our-team_list-image" />
            </div>
          </div>
        )}
        {window.innerWidth >= 768 && window.innerWidth < 1440 && (
          <>
            <div className="our-team_list">
              <div className="our-team_list-item">
                <img src={iryna} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={andrii} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={bren} alt="" className="our-team_list-image" />
              </div>
            </div>
            <div className="our-team_list">
              <div className="our-team_list-item">
                <img src={taras} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={vlad} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={ava} alt="" className="our-team_list-image" />
              </div>
            </div>
          </>
        )}{' '}
        {window.innerWidth < 768 && (
          <>
            <div className="our-team_list">
              <div className="our-team_list-item">
                <img src={iryna} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={andrii} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={bren} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={taras} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={vlad} alt="" className="our-team_list-image" />
              </div>
              <div className="our-team_list-item">
                <img src={ava} alt="" className="our-team_list-image" />
              </div>
            </div>
          </>
        )}
        <div className="our-team_info">
          <span className="navigation-label">{'[Our Team]'}</span>

          <div className="our-team_info__wrapper">
            <div className="our-team_info__title-section">
              <span className="our-team_info__title-section_header">
                See some behind-the-scenes content on
              </span>

              <div className="four-team_info__title-section_button-wrapper">
                <a
                  href="https://www.instagram.com/musick.project"
                  className="our-team_info__title-section_button"
                  target="blank"
                >
                  <svg className="our-team_info__title-section_link-svg">
                    <use
                      href={`${Icons}#instagram`}
                      width="24px"
                      height="24px"
                    ></use>
                  </svg>
                </a>

                <a
                  href="https://www.tiktok.com/@musick.project"
                  className="our-team_info__title-section_button"
                  target="blank"
                >
                  <svg className="our-team_info__title-section_link-svg">
                    <use
                      href={`${Icons}#tiktok`}
                      width="24px"
                      height="24px"
                    ></use>
                  </svg>
                </a>
              </div>
            </div>

            <ul className="autoBlur our-team_info__text-section__list">
              <li className="our-team_info__text-section__item">
                We’re a team of six BFM students studying Crossmedia and doing
                our super hyper mega important semester project.
              </li>

              <li className="our-team_info__text-section__item">
                We love music and we love weird unconventional stuff, so when it
                came to choosing a project idea - we knew this was gonna be it.
                And the way we manage to do quality work while having a brainrot
                level of humor needs to be studied. But hey, we do take our
                mission seriously.
              </li>

              <li className="our-team_info__text-section__item">
                We are from everywhere: Estonia, Ukraine, and Finland, and we
                bring together a mix of skills and vibes. We do everything from
                marketing to video production and coding (how do you think this
                website was made, huh?).
              </li>

              <li className="our-team_info__text-section__item">
                Come to our event and see for yourself. We’re here to change the
                game, and we’re just getting started.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
