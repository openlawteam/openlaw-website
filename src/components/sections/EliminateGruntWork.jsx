import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';
import MediaQuery from 'react-responsive';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/eliminategruntwork.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import { SECTION_HEADER_CUSTOM_WIDTH } from '../../config/mediaQueries';
import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const ColumnHeader = ({ children }) => (
  <div className={s.columnHeader}>{children}</div>
);
const Text = ({ children }) => <p className={s.text}>{children}</p>;

class EliminateGruntWork extends React.Component {
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

  goToLib = () => {
    window.open('https://lib.openlaw.io/web/default', '_blank');
  };

  headerImage = () => {
    return (
      <MediaQuery query={SECTION_HEADER_CUSTOM_WIDTH}>
        {matches =>
          matches ? (
            <img
              src={withPrefix('/static/img/squiggle-header-short.svg')}
              alt="squiggle line"
            />
          ) : (
            <img
              src={withPrefix('/static/img/squiggle-header.svg')}
              alt="squiggle line"
            />
          )
        }
      </MediaQuery>
    );
  };

  render() {
    return (
      <div className={s.outerContainer}>
        <div className={s.eliminateGruntWorkContainer}>
          <div className={f.row}>
            <Wrap>
              <div className={s.headerContainer}>
                {this.headerImage()}
                <Header>Digital Contracts</Header>
                {this.headerImage()}
              </div>
              <div className={`${f.row} ${s.flexWrapper}`}>
                <div
                  className={`${s.eliminateGruntWorkWrapper} ${s.eliminateGruntWorkWrapperFirst}`}
                  key="1"
                >
                  <div className={s.textColumnContainer}>
                    <div className={`${f.column} ${s.textColumn}`} key="1.1">
                      <ColumnHeader>Automate</ColumnHeader>
                      <Text>
                        Wrap smart contracts in legal agreements in minutes
                        using our tools
                      </Text>
                    </div>
                  </div>

                  <div className={`${f.column} ${s.imgColumn}`} key="1.2">
                    <div className={`${s.imgDiv} ${s.imgDivLeftFacing}`}>
                      <img
                        src={withPrefix('/static/img/left-facing-screen.svg')}
                        role="presentation"
                        alt="left facing screen"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${f.row} ${s.flexWrapper}`}>
                <div className={`${s.eliminateGruntWorkWrapper}`} key="2">
                  <div className={`${f.column} ${s.imgColumn}`} key="2.1">
                    <div
                      className={`${s.imgDiv} ${s.imgDivRightFacing}`}
                      data-aos="fade-up"
                      data-aos-delay="150"
                    >
                      <img
                        src={withPrefix('/static/img/right-facing-screen.svg')}
                        role="presentation"
                        alt="right facing screen"
                      />
                    </div>
                  </div>

                  <div className={s.textAndButtonContainer} key="2.2">
                    <div className={s.textColumnContainer} key="2.2.1">
                      <div
                        className={`${f.column} ${s.textColumn}`}
                        key="2.2.1.1"
                      >
                        <ColumnHeader>Execute</ColumnHeader>
                        <Text>
                          Sign and seamlessly interact with smart contracts
                        </Text>
                      </div>

                      <div
                        className={`${f.column} ${s.textColumn}`}
                        key="2.2.1.2"
                      >
                        <ColumnHeader>API</ColumnHeader>
                        <Text>
                          Create, access, and execute wrapped smart contracts
                          from our easy to use API
                        </Text>
                      </div>
                    </div>

                    <div
                      className={s.highlightContainer}
                      data-aos="fade-up"
                      data-aos-delay="450"
                      key="2.2.2"
                      onClick={this.goToDocs}
                    >
                      Learn More
                    </div>

                    <div
                      className={s.buttonContainer}
                      data-aos="fade-up"
                      data-aos-delay="450"
                      key="2.2.3"
                    >
                      <button
                        onClick={this.goToLib}
                        className={`${s.button} button`}
                      >
                        Play Around
                      </button>
                    </div>
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

export default EliminateGruntWork;
