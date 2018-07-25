import React from 'react'
// import PropTypes from 'prop-types'

import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/signup.module.scss';
import i from '../../scss/modules/intro.module.scss';

import LogoSVG from '../../components/svg/LogoSVG';
import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

import bgImage from '../../assets/bg.svg';
import StraightLinesSVG from '../svg/StraightLinesSVG';

const IntroSection = ({ data }) => (
  <div className={i.intro} style={{backgroundImage: 'url(' + bgImage + ')'}}>
    <div className={f.row}>
      <Wrap>
        <div className={f.row}>
        	<div className={`${f.column} ${i.text}`} key="1">
            <LogoSVG />
            <p>Imagine a world in which every single human being can freely participate in a just legal system.</p>
        	  <p>That's our commitment.</p>
            <div className={i.lines}>
              <StraightLinesSVG />
            </div>
          </div>
          <div className={f.column} key="2">
            <div className={s.signUpForm}>
              <SignupForm />
            </div>
          </div>
        </div>
      </Wrap>
    </div>
	</div>
);

export default IntroSection;
