import React, { Fragment } from 'react'
import { Link } from 'gatsby';

import SiteNav from './SiteNav';
import NavData from '../config/nav';
import { LogoCircle } from './svg/LogoCircle';
import Wrap from './common/Wrap';

import f from '../scss/modules/foundation.module.scss';
import s from '../scss/modules/header.module.scss';

const EmptyTag = Fragment;

const Header = ({ subpage, siteTitle }) => (
  <Wrap>
    {subpage && (
      <Link className={s.link} to="/"><LogoCircle className={s.logo} /></Link>
    )}
    <SiteNav data={NavData} />
  </Wrap>
);

export default Header;
