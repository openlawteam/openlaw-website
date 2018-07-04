import React from 'react';
// @todo use media query (if necessary) for the wrap width
// import Media from 'react-media';

import styles from '../scss/modules/base.module.scss';

const Wrap = ({ children }) => (
  <div className={`${styles.wrap} ${styles.wrapLarge}`}>
    {children}
  </div>
);

export default Wrap;
