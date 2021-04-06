import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';
import MediaQuery from 'react-responsive';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/community.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import { SECTION_HEADER_CUSTOM_WIDTH } from '../../config/mediaQueries';
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

  headerImage = () => {
    return (
      <MediaQuery query={SECTION_HEADER_CUSTOM_WIDTH}>
        {matches =>
          matches ? (
            <img
              src={withPrefix('/static/img/squiggle-header-white-short.svg')}
              alt="squiggle line"
            />
          ) : (
            <img
              src={withPrefix('/static/img/squiggle-header-white.svg')}
              alt="squiggle line"
            />
          )
        }
      </MediaQuery>
    );
  };

  render() {
    return (
      <div className={s.communityContainer}>
        <div className={s.headerContainer}>
          {this.headerImage()}
          <Header>Community Driven</Header>
          {this.headerImage()}
        </div>
        <div className={f.row}>
          <Wrap>
            <SubHeader>
              Our sandbox is for developers who want to make the next great
              product leveraging our tools, markup language, and blockchain
              extensions
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
