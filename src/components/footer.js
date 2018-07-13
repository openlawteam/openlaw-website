import React from 'react'

import s from '../scss/modules/footer.module.scss';
import f from '../scss/modules/foundation.module.scss';

import LogoSVG from './svg/LogoSVG';

import SiteNav from './SiteNav';
import NavData from '../config/nav';

import Wrap from './common/Wrap';

const Footer = () => (
  <Wrap>
    <div className={`${f.row} ${s.footer}`}>
      <div className={f.column} key="1">
        <LogoSVG />
      </div>
      <div className={f.column} key="2">
        <SiteNav data={NavData} />
      </div>
      <div className={f.column} key="3">
        <p>Copyright © OpenLaw 2018</p>
      </div>
    </div>
  </Wrap>
);

export default Footer;
