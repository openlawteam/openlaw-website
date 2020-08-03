import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/approachearly.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class ApproachEarly extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    });
  }

  render() {
    return (
      <div className={s.approachEarlyContainer}>
        <div className={f.row}>
          <Wrap>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={s.approachEarlyWrapper} key="1">
                <div className={`${f.column} ${s.imgColumn}`} key="1.1">
                  <img
                    className={s.arrowLeft}
                    src={withPrefix('/static/img/about-arrow_01.svg')}
                    role="presentation"
                    alt="About page arrow 01"
                  />
                  <div
                    className={s.imgDiv}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <img
                      src={withPrefix('/static/img/about_02.svg')}
                      role="presentation"
                      alt="About page 02"
                    />
                  </div>
                  <div
                    className={s.imgSubContainer}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <img
                      src={withPrefix('/static/img/bullet.svg')}
                      alt="bullet"
                    />
                    <span className={s.imgSubText}>lorem ipsum dolor sit</span>
                  </div>
                </div>

                <div className={`${f.column} ${s.textColumn}`} key="1.2">
                  <Header>Approach Early</Header>
                  <Text>
                    Early on, OpenLaw approached the Legal connundrum from the
                    inside out.
                  </Text>
                  <Text>
                    A team of legal engineers with deep experience in an
                    inefficient and cumbersome industry imagined what could be
                    possible by combining
                  </Text>
                  <div className={s.arrowContainer}>
                    <img
                      src={withPrefix('/static/img/about-arrow_02.svg')}
                      role="presentation"
                      alt="About page arrow 02"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default ApproachEarly;
