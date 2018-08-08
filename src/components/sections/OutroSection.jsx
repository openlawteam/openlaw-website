import React from 'react'
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/outrosection.module.scss';

import WaveSVG from '../../components/svg/WaveSVG';
import LargeCircleSVG from '../../components/svg/LargeCircleSVG';

import AOS from 'aos';
import SignupForm from '../../components/SignupForm';
import Wrap from '../common/Wrap';

class OutroSection extends React.Component {
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
    return(
      <Wrap>
        <div className={s.outroSection}>
          <div className={s.largeCircleWrapper}>
            <LargeCircleSVG />
          </div>
          <div>
            <div className={f.row}>
              <div className={`${f.column} ${f['small12']} ${f['medium6']}`} key="1" data-aos="fade-up" data-aos-delay="200">
                <h2 className={`${s.heading}`}>Join us and help build a lower cost and fairer legal system.</h2>
              </div>

              <div className={`${f.column} ${f['small12']} ${f['medium6']}`} key="2" data-aos="fade-up" data-aos-delay="400">
                <SignupForm />
              </div>

              <WaveSVG />
              <img className={s.funBunch} src={withPrefix('/static/img/fun-bunch-bw.png')} alt="" role="presentation" />
            </div>
          </div>
        </div>
      </Wrap>
    )
  }
};

export default OutroSection;
