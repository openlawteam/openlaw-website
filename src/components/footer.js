import React from 'react'

import s from '../scss/modules/footer.module.scss';
import f from '../scss/modules/foundation.module.scss';

import LogoSVG from './svg/LogoSVG';

import SiteNav from './SiteNav';
import NavData from '../config/nav';

import Wrap from './common/Wrap';

const Footer = () => (
  <Wrap>
    <div className={s.footer}>
      <div className={f.row} key="1">
        <div className={f.column}>
          <LogoSVG />
        </div>
      </div>
      <div className={f.row} key="2">
        <div className={f.column}>
          <SiteNav data={NavData} />
        </div>
      </div>
      <div className={f.row} key="3">
        <div className={f.column}>
          <p>Copyright © OpenLaw 2018</p>
        </div>
      </div>
    </div>
  </Wrap>
);

export default Footer;
