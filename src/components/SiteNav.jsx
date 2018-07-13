import React from 'react'
import PropTypes from 'prop-types'

import styles from '../scss/modules/sitenav.module.scss';
import Wrap from './common/Wrap';

const SiteNav = ({ data }) => (
  <Wrap>
    <nav className={styles.nav}>
      <ul>
        {data.map(({ name, url }) => (
          <li key={name}><a href={url}>{name}</a></li>
        ))}
      </ul>
    </nav>
  </Wrap>
);

export default SiteNav;
