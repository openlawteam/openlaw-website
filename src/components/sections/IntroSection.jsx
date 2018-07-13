import React from 'react'
// import PropTypes from 'prop-types'

import foundation from '../../scss/modules/foundation.module.scss';
// import styles from '../../scss/modules/sitenav.module.scss';

import LogoSVG from '../../components/svg/LogoSVG';
import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

const IntroSection = ({ data }) => (
  <Wrap>

  	<div className={foundation.column} key="1">
	    <LogoSVG />
	    <p>Imagine a world in which every single human being can freely participate in a just legal system.</p>
  	  <p>That's our commitment.</p>
  	</div>

  	<div className={foundation.column} key="2">
    	<SignupForm />
		</div>

  </Wrap>
);

export default IntroSection;
