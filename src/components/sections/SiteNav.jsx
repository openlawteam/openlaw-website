import React from 'react'
// import PropTypes from 'prop-types'

import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/sitenav.module.scss';
import Wrap from '../common/Wrap';

const SiteNav = ({ data }) => (
  <Wrap>
    <nav className={s.nav}>
      <div className={`${s.wrapper} ${f.row}`}>
	      <ul>
	        {data.map(({ name, url }) => (
	          <li key={name}><a href={url}>{name}</a></li>
	        ))}
	      </ul>
      </div>
    </nav>
  </Wrap>
);

export default SiteNav;
