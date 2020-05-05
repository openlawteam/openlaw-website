import React from 'react';
import { withPrefix } from 'gatsby-link';

import s from '../../scss/modules/modernlaw.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const SubHeader = ({ children }) => <p className={s.subHeader}>{children}</p>;

class ModernLaw extends React.Component {
  render() {
    return (
      <div className={s.modernLawContainer}>
        <div className={`${f.row} ${s.innerContainer}`}>
          <Wrap>
            <div className={s.headerContainer}>
              <img
                src={withPrefix('/static/img/squiggle-header.svg')}
                alt="squiggle line"
              />
              <Header>Built For Modern Law</Header>
              <img
                src={withPrefix('/static/img/squiggle-header.svg')}
                alt="squiggle line"
              />
            </div>
            <SubHeader>
              A secure platform built from the inside out.
              <br />
              By lawyers, for better law.
            </SubHeader>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={`${s.modernLawWrapper}`} key="1">
                <div className={`${f.column} ${s.textColumn}`} key="1.1">
                  <div
                    className={`${s.columnHeader} ${s.columnHeaderLawFirms}`}
                  >
                    Law Firms
                  </div>
                  <ul>
                    <li>Improve associate performance</li>
                    <li>Notify clients as contracts are being drafted</li>
                    <li>Decrease risk of error and mistake</li>
                  </ul>
                </div>

                <div className={`${f.column} ${s.textColumn}`} key="1.2">
                  <div
                    className={`${s.columnHeader} ${s.columnHeaderLegalTeams}`}
                  >
                    Legal Teams
                  </div>
                  <ul>
                    <li>Improve associate performance</li>
                    <li>Notify clients as contracts are being drafted</li>
                    <li>Decrease risk of error and mistake</li>
                  </ul>
                </div>

                <div className={`${f.column} ${s.textColumn}`} key="1.3">
                  <div className={`${s.columnHeader} ${s.columnHeaderSales}`}>
                    Sales &amp; HR
                  </div>
                  <ul>
                    <li>Close deals faster</li>
                    <li>Onboard in minutes</li>
                    <li>Improve client and employee experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default ModernLaw;
