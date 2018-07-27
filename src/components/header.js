import React from 'react'
// import { Link } from 'gatsby'

import SiteNav from './sections/SiteNav';
import NavData from '../config/nav';

const Header = ({ siteTitle }) => (
  <>
    <SiteNav data={NavData} />
  </>
);

export default Header;
