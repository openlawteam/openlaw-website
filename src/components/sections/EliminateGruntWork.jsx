import React from 'react';
import { withPrefix } from 'gatsby-link';

import s from '../../scss/modules/eliminategruntwork.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const ColumnHeader = ({ children }) => (
  <div className={s.columnHeader}>{children}</div>
);
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class EliminateGruntWork extends React.Component {
  goToRequestAccess = () => {
    window.open('https://openlawform.typeform.com/to/GYy10G', '_blank');
  };

  render() {
    return (
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
                    {/* <button
                    onClick={this.goToRequestAccess}
                    className={`${s.button} button`}
                  >
                    Request Free Access
                  </button> */}
                  </div>

                  <div className={`${f.column} ${s.textColumn}`} key="1.2">
                    <ColumnHeader>Collaborate</ColumnHeader>
                    <Text>
                      Set up approvals, notices, and send client alerts as work
                      is complete and actions are required.
                    </Text>
                    {/* <button
                    onClick={this.goToRequestAccess}
                    className={`${s.button} button`}
                  >
                    Request Free Access
                  </button> */}
                  </div>
                </div>

                <div className={`${f.column} ${s.imgColumn}`} key="1.3">
                  <div className={`${s.imgDiv}`}>
                    <img
                      src={withPrefix('/static/img/code-screen.png')}
                      role="presentation"
                      alt="Code on screen"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={`${s.eliminateGruntWorkWrapper}`} key="2">
                <div className={`${f.column} ${s.imgColumn}`} key="2.1">
                  <div className={`${s.imgDiv}`}>
                    <img
                      src={withPrefix('/static/img/code-screen.png')}
                      role="presentation"
                      alt="Code on screen"
                    />
                  </div>
                </div>

                <div className={s.textColumnContainer}>
                  <div className={`${f.column} ${s.textColumn}`} key="2.2">
                    <ColumnHeader>E-Sign</ColumnHeader>
                    <Text>
                      Electronically sign contracts, including in Word. Save
                      drafts and documents automatically.
                    </Text>
                    {/* <button
                    onClick={this.goToRequestAccess}
                    className={`${s.button} button`}
                  >
                    Request Free Access
                  </button> */}
                  </div>

                  <div className={`${f.column} ${s.textColumn}`} key="2.3">
                    <ColumnHeader>Analyze</ColumnHeader>
                    <Text>
                      Leveling Legal and making agreements accessible. An open
                      hub for Legal Engineers.
                    </Text>
                  </div>

                  {/* <div className={s.buttonContainer}>
                    <button
                      onClick={this.goToRequestAccess}
                      className={`${s.button} button`}
                    >
                      Request Free Access
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default EliminateGruntWork;
