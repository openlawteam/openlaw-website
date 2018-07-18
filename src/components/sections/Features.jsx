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
    <div className={s.fullWrap}>
        <div className={`${f.row} ${s.featureTile}`} key="1"> 
        	<div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.svgWrapper}`}>
        		<img src={BuildPNG} alt="" />
            </div>
            <div className={`${f.column} ${f['small12']} ${f['medium7']}`}>
    	  		<h2>build</h2>
    	  		<div className={s.leftDivider}></div>
    	  		<p>Build entire legal applications on OpenLaw using our public API.</p>
                <button className={s.button}>Learn How</button>
            </div>
        </div>
        <div className={`${f.row} ${s.featureTile}`} key="2">
            <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.svgWrapper}`}>
                <img src={CommunityPNG} alt="" />
            </div>
            <div className={`${f.column} ${f['small12']} ${f['medium7']}`}>
                <h2>community</h2>
                <div className={s.leftDivider}></div>
                <p>We're the home to a passionate group of lawyers committed to rebuilding the legal industry.</p>
                <button className={s.button}>Join Us</button>
        	</div>
        </div>
    </div>
  </Wrap>
);

export default Features;
