import React from 'react'
// import PropTypes from 'prop-types'

import s from '../../scss/modules/largequote.module.scss';
import f from '../../scss/modules/foundation.module.scss';
import Wrap from '../common/Wrap';

const LargeQuote = ({ data }) => (
  <Wrap>
  	<div className={s.largeQuote}>
	  	<div className={s.outerBorder}>
		  	<div className={s.middleBorder}>
			  	<div className={s.innerBorder}>
				  	<div className={f.row}>
					    <div className={`${f.column} ${f.small12} ${f.medium8} ${s.blockCenter} ${f.large7} ${f.alignCenter}`}>
						  	<h1>OpenLaw brings lawyers to work together on legal templates for the benefit of everyone.</h1>
					    </div>
				    </div>
			    </div>
		    </div>
	    </div>
    </div>
  </Wrap>
);

export default LargeQuote;
