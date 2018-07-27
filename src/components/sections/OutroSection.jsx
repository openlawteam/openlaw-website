import React from 'react'
// import PropTypes from 'prop-types'

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/outrosection.module.scss';

import WaveSVG from '../../components/svg/WaveSVG';
import LargeCircleSVG from '../../components/svg/LargeCircleSVG';

import AOS from 'aos';
import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

const OutroSection = ({ data }) => (
  <Wrap>
  	<div className={s.outroSection}>
	  	<div className={s.largeCircleWrapper}>
	  		<LargeCircleSVG />
		</div>
	  	<div className={`${s.fullRow}`}>
			<div className={s.columnBg}></div>
	  		<div className={f.row}>
			  	<div className={`${f.column} ${f['small12']} ${f['medium6']}`} key="1">
					<h2 className={`${s.heading}`}>Join us and help build a lower cost and fairer legal system.</h2>
					<WaveSVG />
			  	</div>
			  	<div className={`${f.column} ${f['small12']} ${f['medium6']}`} key="2">
			  		<div className={s.signUpForm}>
			    		<SignupForm />
					</div>
				</div>
			</div>
		</div>
	</div>
  </Wrap>
);

export default OutroSection;
