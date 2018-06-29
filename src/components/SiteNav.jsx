import React from 'react'
import PropTypes from 'prop-types'

import styles from '../css-modules/sitenav.module.css';

const SiteNav = ({ data }) => (
  <div className="wrap wrap-large">
    <nav className={styles.nav}>
      <ul>
        {data.map(({ name, url }) => (
          <li><a href={url}>{name}</a></li>
        ))}
      </ul>
    </nav>
  </div>
);

export default SiteNav;
