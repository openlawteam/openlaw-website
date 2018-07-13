import React from 'react'
// import PropTypes from 'prop-types'

import foundation from '../../scss/modules/foundation.module.scss';
// import styles from '../../scss/modules/outrosection.module.scss';

import WaveSVG from '../../components/svg/WaveSVG';

import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

const OutroSection = ({ data }) => (
  <Wrap>

  	<div className={foundation.column} key="1">
      <h2>Join us and help build a lower cost and fairer legal system.</h2>
	    <WaveSVG />
  	</div>

  	<div className={foundation.column} key="2">
    	<SignupForm />
		</div>

  </Wrap>
);

export default OutroSection;
