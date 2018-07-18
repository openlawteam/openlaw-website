import React from 'react'

import s from '../scss/modules/footer.module.scss';
import f from '../scss/modules/foundation.module.scss';

import LogoSVG from './svg/FooterLogoSVG';

import FooterNav from './sections/FooterNav';
import NavData from '../config/nav';

import Wrap from './common/Wrap';

const Footer = () => (
  <Wrap>
    <div className={s.footer}>
      <div className={f.row} key="1">
        <div className={`${f.column} ${f['small12']} ${f['medium2']}`}>
          <LogoSVG />
        </div>
        <div className={`${f.column} ${f['small12']} ${f['medium10']}`}>
          <FooterNav data={NavData} />
        </div>
      </div>
      <div className={f.row} key="3">
        <div className={f.column}>
          <p className={s.footerCopyright}>Copyright © OpenLaw 2018</p>
        </div>
      </div>
    </div>
  </Wrap>
);

export default Footer;
