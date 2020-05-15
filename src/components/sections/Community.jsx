import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/community.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const SubHeader = ({ children }) => <p className={s.subHeader}>{children}</p>;

class Community extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    });
  }

  goToLib = () => {
    window.open('https://lib.openlaw.io/web/default', '_blank');
  };

  goToApiDocs = () => {
    window.open('https://docs.openlaw.io/getting-started-overview', '_blank');
  };

  render() {
    return (
      <div className={s.communityContainer}>
        <div className={s.headerContainer}>
          <img
            src={withPrefix('/static/img/squiggle-header-white.svg')}
            alt="squiggle line"
          />
          <Header>Community Driven</Header>
          <img
            src={withPrefix('/static/img/squiggle-header-white.svg')}
            alt="squiggle line"
          />
        </div>
        <div className={f.row}>
          <Wrap>
            <SubHeader>
              Explore how developers are extending our digital contracting
              platform to execute smart contracts, build new applications, and
              power the future of law.
            </SubHeader>
            <div className={s.developersContainer}>
              <div className={s.developersHeader}>Developers</div>
              <img
                src={withPrefix('/static/img/developers-icon.svg')}
                alt="developers-icon"
                data-aos="fade-up"
                data-aos-delay="150"
              />
              <div
                className={s.developersText}
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Execute smart contracts, create applications using an API
              </div>
            </div>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={s.communityWrapper} key="1">
                <div
                  className={`${f.column} ${s.buttonContainer}`}
                  key="1.1"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  <button
                    onClick={this.goToLib}
                    className={`${s.button} button`}
                  >
                    Get Started
                  </button>
                </div>
                <div
                  className={`${f.column} ${s.buttonContainer}`}
                  key="1.2"
                  data-aos="fade-up"
                  data-aos-delay="450"
                >
                  <button
                    onClick={this.goToApiDocs}
                    className={`${s.button} button`}
                  >
                    API
                  </button>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default Community;
