import React from 'react';
// import PropTypes from 'prop-types'

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/signup.module.scss';
import i from '../../scss/modules/intro.module.scss';

import AOS from 'aos';

import LogoSVG from '../../components/svg/LogoSVG';
import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

import bgImage from '../../assets/bg.svg';
import StraightLinesSVG from '../svg/StraightLinesSVG';

class IntroSection extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		AOS.init({
			duration: 800,
			offset: 40,
			delay: 120,
			mirror: true,
			once: false,
			anchorPlacement: 'top-bottom'
		})
	}

	render() {
		return(
			<div className={i.intro} style={{backgroundImage: 'url(' + bgImage + ')'}}>
				<div className={f.row}>
					<Wrap>
						<div className={f.row}>
							<div className={`${f.column} ${i.text}`} key="1">
								<div data-aos="fade-up" data-aos-delay="150">
									<LogoSVG />
								</div>
								<p data-aos="fade-up" data-aos-delay="400">Imagine a world in which every single human being can freely participate in a just legal system.</p>
								<p data-aos="fade-up" data-aos-delay="600">That's our commitment.</p>
								<div className={i.lines} data-aos="fade-up" data-aos-delay="600">
									<StraightLinesSVG />
								</div>
							</div>
							<div className={f.column} key="2">
								<div className={s.signUpForm} data-aos="fade-up" data-aos-delay="800">
									<SignupForm />
								</div>
							</div>
						</div>
					</Wrap>
				</div>
			</div>
		)
	}

};

export default IntroSection;
