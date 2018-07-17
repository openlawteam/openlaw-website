import React from 'react'
// import PropTypes from 'prop-types'

import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/majorfeatures.module.scss';
import Wrap from '../common/Wrap';

// import BuildSVG from '../../components/svg/BuildSVG';
import BuildPNG from '../../assets/build.png'
// import CommunitySVG from '../../components/svg/CommunitySVG';
import CommunityPNG from '../../assets/community.png'

const Features = ({ data }) => (
  <Wrap>
    <div className={f.row} key="1">
    	<div className={`${f.column} ${f['small12']} ${f['medium6']} ${s.svgWrapper}`}>
    		<img src={BuildPNG} alt="" />
        </div>
        <div className={`${f.column} ${f['small12']} ${f['medium6']}`}>
	  		<h2>build</h2>
	  		<div className={s.divider}></div>
	  		<p>Build entire legal applications on OpenLaw using our public API.</p>
    	</div>
    </div>
    <div className={f.row} key="2">
    	<div className={`${f.column} ${f['small12']} ${f['medium6']} ${s.svgWrapper}`}>
    		<img src={CommunityPNG} alt="" />
        </div>
        <div className={`${f.column} ${f['small12']} ${f['medium6']}`}>
	  		<h2>community</h2>
	  		<div className={s.divider}></div>
	  		<p>We're the home to a passionate group of lawyers committed to rebuilding the legal industry.</p>
    	</div>
    </div>
  </Wrap>
);

export default Features;
