import React from 'react'
// import PropTypes from 'prop-types'

import s from '../../scss/modules/buildingfuture.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import HalfCirclesSVG from '../../components/svg/HalfCirclesSVG';
import YellowTriangleSVG from '../../components/svg/YellowTriangleSVG';
import GreyTriangleSVG from '../../components/svg/GreyTriangleSVG';
import LightBlueShapeSVG from '../../components/svg/LightBlueShapeSVG';

import bgImage from '../../assets/blueCircle.svg';
import blueBg from '../../assets/blueBg.png';

import Wrap from '../common/Wrap';

const BuildingFuture = ({ data }) => (
  <Wrap>
    <div className={`${s.wrapper}`}>
    	<div className={`${s.parallelogram} ${s.zIndex}`}>
			<LightBlueShapeSVG />
		</div>
		<div className={`${s.bg}`} style={{backgroundImage: 'url(' + bgImage + '), url( ' + blueBg +')'}}></div>
    	<div className={`${f.row} ${s.zIndex}`}>
    		<div className={`${s.divider}`}></div>
    	</div>
    	<div className={`${f.row} ${s.zIndex}`}>
	  		<h1>Building the<br />Future of Law</h1>
    	</div>
    	<div className={`${s.circles} ${s.zIndex}`}>
    		<HalfCirclesSVG />
    	</div>
    	<div className={`${s.triangles}`}>
    		<div className={`${s.triangle} ${s.grey}`}>
    			<GreyTriangleSVG />
    		</div>
    		<div className={`${s.triangle} ${s.yellow}`}>
    			<YellowTriangleSVG />
    		</div>
    	</div>
    </div>
  </Wrap>
);

export default BuildingFuture;
