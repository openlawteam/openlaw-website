import React from 'react'
// import PropTypes from 'prop-types'

import s from '../../scss/modules/footer.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Logo from '../../components/svg/Logo';

import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

const Footer = ({ data }) => (
  <Wrap>
  	<div className{s.footer}>
	  	<div className={f.column} key="1">
	      <h2>Join us and help build a lower cost and fairer legal system.</h2>
		    <WaveSVG />
	  	</div>

	  	<div className={f.column} key="2">
	    	<SignupForm />
		</div>
	</div>
  </Wrap>
);

export default Footer;
