import React from 'react'
// import PropTypes from 'prop-types'

// import styles from '../../scss/modules/largequote.module.scss';
import foundation from '../../scss/modules/foundation.module.scss';
import Wrap from '../common/Wrap';

const LargeQuote = ({ data }) => (
  <Wrap>
    <div className={foundation.column}>
	  	<h1>OpenLaw brings lawyers to work together on legal templates for the benefit of everyone.</h1>
    </div>
  </Wrap>
);

export default LargeQuote;
