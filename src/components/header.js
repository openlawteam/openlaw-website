import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby-link';

import SiteNav from './SiteNav';
import NavData from '../config/nav';
import { LogoCircle } from './svg/LogoCircle';
import Wrap from './common/Wrap';

import s from '../scss/modules/header.module.scss';

const Header = ({ subpage }) => (
  <Wrap className={s.headerWrap}>
    {subpage ? (
      <Link to="/">
        <img
          className={s.headerLogo}
          src={withPrefix('/static/img/ol-logo-white.svg')}
          alt="OpenLaw logo white"
        />
      </Link>
    ) : (
      <img
        className={s.headerLogo}
        src={withPrefix('/static/img/ol-logo-white.svg')}
        alt="OpenLaw logo white"
      />
    )}
    <SiteNav data={NavData} />
  </Wrap>
);

export default Header;
