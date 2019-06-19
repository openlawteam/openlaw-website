import React from 'react'
import { Link } from 'gatsby';

import SiteNav from './SiteNav';
import NavData from '../config/nav';
import { LogoCircle } from './svg/LogoCircle';
import Wrap from './common/Wrap';

import s from '../scss/modules/header.module.scss';

// @todo cleanup later as a part of Wrap
const wrapStyle = {
  maxWidth: '65.1rem',
  margin: '0 auto',
  padding: '0 1.33333rem',
  position: 'relative',
};

const Header = ({ subpage }) => (
  <Wrap style={wrapStyle}>
    {subpage && (
      <Link className={s.link} to="/"><LogoCircle className={s.logo} /></Link>
    )}
    <SiteNav data={NavData} />
  </Wrap>
);

export default Header;
