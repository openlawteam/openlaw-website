import React from 'react'
// import PropTypes from 'prop-types'

import f from '../../scss/modules/footer.module.scss';
import Wrap from './../common/Wrap';

const FooterNav = ({ data }) => (
  <Wrap>
    <nav className={`${f.footerNav}`}>
      <ul>
        {data.map(({ name, url }) => (
          <li key={name}><a href={url}>{name}</a></li>
        ))}
      </ul>
    </nav>
  </Wrap>
);

export default FooterNav;
