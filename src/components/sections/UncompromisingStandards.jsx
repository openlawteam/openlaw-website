import React from 'react';
import { withPrefix } from 'gatsby-link';

import s from '../../scss/modules/uncompromisingstandards.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const SubHeader = ({ children }) => <p className={s.subHeader}>{children}</p>;

class UncompromisingStandards extends React.Component {
  render() {
    return (
      <div className={s.uncompromisingStandardsContainer}>
        <div className={f.row}>
          <Wrap>
            <div className={s.headerContainer}>
              <img
                src={withPrefix('/static/img/squiggle-header.svg')}
                alt="squiggle line"
              />
              <Header>Uncompromising Standards</Header>
              <img
                src={withPrefix('/static/img/squiggle-header.svg')}
                alt="squiggle line"
              />
            </div>
            <SubHeader>
              Join the growing number of law firms, startups, and organizations
              using and exploring OpenLaw
            </SubHeader>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={`${s.uncompromisingStandardsWrapper}`} key="1">
                <div className={s.userContainer} key="1.1">
                  {/* TODO: add actual images for partners/clients */}
                  <span className={s.placeholderImg}></span>
                  <span className={s.placeholderImg}></span>
                </div>
                <div className={s.userContainer} key="1.2">
                  <span className={s.placeholderImg}></span>
                  <span className={s.placeholderImg}></span>
                </div>
                <div className={s.userContainer} key="1.3">
                  <span className={s.placeholderImg}></span>
                  <span className={s.placeholderImg}></span>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default UncompromisingStandards;
