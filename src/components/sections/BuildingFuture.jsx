import React from 'react'
import AOS from 'aos';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/buildingfuture.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import LogoShapeSVG from '../../components/svg/LogoShapeSVG';
// import YellowTriangleSVG from '../../components/svg/YellowTriangleSVG';
// import GreyTriangleSVG from '../../components/svg/GreyTriangleSVG';
// import LightBlueShapeSVG from '../../components/svg/LightBlueShapeSVG';

import bgImage from '../../assets/blueCircle.svg';
// import blueBg from '../../assets/blueBg.png';

import Wrap from '../common/Wrap';

class BuildingFuture extends React.Component {
	componentDidMount() {
		AOS.init({
			duration: 800,
			offset: 40,
			delay: 120,
			mirror: true,
			once: true,
		})
	}

	render() {
    return (
			<Wrap>
				<div className={`${s.wrapper}`}>
					{/*<div className={`${s.parallelogram} ${s.zIndex}`}>
						<div data-aos="fade-up" data-aos-delay="200">
							<LightBlueShapeSVG />
						</div>
					</div>*/}

					<div className={`${f.row} ${s.zIndex}`} data-aos="fade-up" data-aos-delay="300">
						<h1>Building the<br />Future of Law</h1>
					</div>

					{/*<div className={`${s.triangles}`}>
						<div className={`${s.triangle} ${s.grey}`} data-aos="fade-up" data-aos-delay="850">
							<GreyTriangleSVG />
						</div>
						<div className={`${s.triangle} ${s.yellow}`} data-aos="fade-up" data-aos-delay="600">
							<YellowTriangleSVG />
						</div>
					</div>*/}
				</div>
			</Wrap>
    );
	}
};

export default BuildingFuture;
