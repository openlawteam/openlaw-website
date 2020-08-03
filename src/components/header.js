import React from 'react';
import { Link } from 'gatsby';
import { withPrefix } from 'gatsby-link';

import SiteNav from './SiteNav';
import NavData from '../config/nav';
import Wrap from './common/Wrap';

import s from '../scss/modules/header.module.scss';

const Header = ({ subpage, pageTitle }) => (
  <Wrap className={s.headerWrap}>
    <div className={s.headerLogoContainer}>
      {subpage || pageTitle ? (
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
    </div>
    <SiteNav data={NavData} />
  </Wrap>
);

export default Header;
