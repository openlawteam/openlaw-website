import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/approachmiddle.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class ApproachMiddle extends React.Component {
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
      <div className={s.approachMiddleContainer}>
        <div className={f.row}>
          <Wrap>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={s.approachMiddleWrapper} key="1">
                <div className={f.column} key="1.1">
                  <Header>Approach Middle</Header>
                  <Text>
                    Early on, OpenLaw approached the Legal connundrum from the
                    inside out.
                  </Text>
                  <Text>
                    A team of legal engineers with deep experience in an
                    inefficient and cumbersome industry imagined what
                  </Text>
                </div>

                <div
                  className={`${f.column} ${s.imgColumn}`}
                  key="1.2"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <div className={s.imgDiv}>
                    <img
                      src={withPrefix('/static/img/about_03.svg')}
                      role="presentation"
                      alt="About page 03"
                    />
                  </div>
                  <div className={s.imgSubContainer}>
                    <img
                      src={withPrefix('/static/img/bullet.svg')}
                      alt="bullet"
                    />
                    <span className={s.imgSubText}>lorem ipsum dolor sit</span>
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

export default ApproachMiddle;
