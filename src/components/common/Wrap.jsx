import React from 'react';
// @todo use media query (if necessary) for the wrap width
// import Media from 'react-media';

// import styles from '../../scss/modules/base.module.scss';
import foundation from '../../scss/modules/foundation.module.scss';

const Wrap = ({ children }) => (
  <div className={`${foundation.row}`}>
    {children}
  </div>
);

export default Wrap;
