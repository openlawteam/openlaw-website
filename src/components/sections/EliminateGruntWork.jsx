import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/eliminategruntwork.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const ColumnHeader = ({ children }) => (
  <div className={s.columnHeader}>{children}</div>
);
const Text = ({ children }) => <p>{children}</p>;

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

  goToRequestAccess = () => {
    window.open('https://openlawform.typeform.com/to/GYy10G', '_blank');
  };

  render() {
    return (
      <div className={s.outerContainer}>
        <div className={s.eliminateGruntWorkContainer}>
          <div className={f.row}>
            <Wrap>
              <div className={s.headerContainer}>
                <img
                  src={withPrefix('/static/img/squiggle-header.svg')}
                  alt="squiggle line"
                />
                <Header>Eliminate Grunt Work</Header>
                <img
                  src={withPrefix('/static/img/squiggle-header.svg')}
                  alt="squiggle line"
                />
              </div>
              <div className={`${f.row} ${s.flexWrapper}`}>
                <div className={`${s.eliminateGruntWorkWrapper}`} key="1">
                  <div className={s.textColumnContainer}>
                    <div className={`${f.column} ${s.textColumn}`} key="1.1">
                      <ColumnHeader>Automate</ColumnHeader>
                      <Text>
                        Create agreements in minutes, not hours while leveraging
                        tools for repeat-use.
                      </Text>
                    </div>

                    <div className={`${f.column} ${s.textColumn}`} key="1.2">
                      <ColumnHeader>Collaborate</ColumnHeader>
                      <Text>
                        Set up approvals, notices, and send client alerts as
                        work is complete and actions are required.
                      </Text>
                    </div>
                  </div>

                  <div className={`${f.column} ${s.imgColumn}`} key="1.3">
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
                        <ColumnHeader>E-Sign</ColumnHeader>
                        <Text>
                          Electronically sign contracts, including in Word. Save
                          drafts and documents automatically.
                        </Text>
                      </div>

                      <div
                        className={`${f.column} ${s.textColumn}`}
                        key="2.2.1.2"
                      >
                        <ColumnHeader>Analyze</ColumnHeader>
                        <Text>
                          Leveling Legal and making agreements accessible. An
                          open hub for Legal Engineers.
                        </Text>
                      </div>
                    </div>

                    <div
                      className={s.highlightContainer}
                      data-aos="fade-up"
                      data-aos-delay="450"
                      key="2.2.2"
                    >
                      We&apos;ll get you set up
                    </div>

                    <div
                      className={s.buttonContainer}
                      data-aos="fade-up"
                      data-aos-delay="450"
                      key="2.2.3"
                    >
                      <button
                        onClick={this.goToRequestAccess}
                        className={`${s.button} button`}
                      >
                        Request Free Access
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
