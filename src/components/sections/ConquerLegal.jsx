import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/conquerlegal.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class ConquerLegal extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    });
  }

  goToDocs = () => {
    window.open('https://docs.openlaw.io', '_blank');
  };

  render() {
    return (
      <div className={s.conquerLegalContainer}>
        <div className={f.row}>
          <Wrap>
            {/* TODO: direct to actual medium post */}
            <div className={s.tagLine}>
              {/* <img
                src={withPrefix('/static/img/news-line.svg')}
                alt="right angle lines"
              />
              <span>
                OpenLaw brings next gen contracts to 1.2 billion Microsoft
                users.
                <a href="#">Read more</a>
              </span> */}
            </div>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={`${s.conquerLegalWrapper}`} key="1">
                <div className={f.column} key="1.1">
                  <Header>Real World Contracts For Ethereum</Header>
                  <Text>
                    OpenLaw makes it easy to create legal agreements that work
                    with Ethereum
                  </Text>
                  <div
                    className={s.buttonContainer}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <button
                      onClick={this.goToDocs}
                      className={`${s.button} button`}
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className={`${f.column} ${s.imgColumn}`} key="1.2">
                  <div
                    className={`${s.imgDiv}`}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <img
                      src={withPrefix('/static/img/primary-3d-boxes.svg')}
                      role="presentation"
                      alt="primary 3D boxes"
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

export default ConquerLegal;
