import React, { Fragment } from 'react'
// import { Link } from 'gatsby'

import SiteNav from './SiteNav';
import NavData from '../config/nav';

const EmptyTag = Fragment;

const Header = ({ siteTitle }) => (
  <EmptyTag>
    <SiteNav data={NavData} />
  </EmptyTag>
);

export default Header;
