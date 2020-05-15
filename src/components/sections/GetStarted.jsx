import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/getstarted.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const SubHeader = ({ children }) => (
  <div className={s.subHeader}>{children}</div>
);
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class GetStarted extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    });
  }

  goToRequestAccess = () => {
    window.open('https://openlawform.typeform.com/to/GYy10G', '_blank');
  };

  render() {
    return (
      <div className={s.outerContainer}>
        <div className={s.getStartedContainer}>
          <div className={s.headerContainer}>
            <img
              src={withPrefix('/static/img/squiggle-header-white.svg')}
              alt="squiggle line"
            />
            <Header>Get Started Today</Header>
            <img
              src={withPrefix('/static/img/squiggle-header-white.svg')}
              alt="squiggle line"
            />
          </div>
          <div className={f.row}>
            <Wrap>
              <div className={`${f.row} ${s.flexWrapper}`}>
                <div className={`${s.getStartedWrapper}`} key="1">
                  <div className={`${f.column} ${s.imgColumn}`} key="1.1">
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

                  <div className={f.column} key="1.2">
                    <SubHeader>Future Proof Your Practice</SubHeader>
                    <Text>
                      Let us demonstrate how our tools can save you 95% of your
                      time and overhead.
                    </Text>
                    <p className={`${s.text} ${s.boldText}`}>
                      Step into the future of Law.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`${f.row} ${s.flexWrapper}`}>
                <div className={`${s.getStartedWrapper}`} key="2">
                  <div
                    className={s.buttonContainer}
                    data-aos="fade-up"
                    data-aos-delay="150"
                  >
                    <button
                      onClick={this.goToRequestAccess}
                      className={`${s.button} button`}
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            </Wrap>
          </div>
        </div>
      </div>
    );
  }
}

export default GetStarted;