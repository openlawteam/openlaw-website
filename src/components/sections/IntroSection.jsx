import React from 'react';

import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/signup.module.scss';
import i from '../../scss/modules/intro.module.scss';

import LogoSVG from '../../components/svg/LogoSVG';
import { RefractLinesSVG } from '../../components/svg/RefractLinesSVG';
import LightOrangeCircleSVG from '../../components/svg/LightOrangeCircleSVG';
import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

import StraightLinesSVG from '../svg/StraightLinesSVG';
import { withPrefix } from 'gatsby-link';

const IntroSection = ({ data }) => (
  <div className={i.intro}>
    <div className={f.row}>
      <Wrap>
        <div className={f.row}>
          {/* LOGO & TAGLINE */}
          <div className={`${f.column} ${i.text} ${f['small12']} ${f['medium6']}`} key="1">
            <img className={i.refractImg} src={withPrefix('/static/img/refract-lines-texture.png')} alt="" />

            <LogoSVG />

            <div className={`${i.text}`}>
              <p>Imagine a world in which every single human being can freely participate in a just legal system.</p>
            </div>
          </div>

          {/* SIGNUP */}
          <div className={`${s.signupWrap} ${f.column} ${f['small12']} ${f['medium6']}`} key="2">
            <SignupForm />
          </div>
        </div>
      </Wrap>
    </div>
  </div>
);

export default IntroSection;
