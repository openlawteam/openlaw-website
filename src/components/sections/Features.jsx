import React from 'react'
// import PropTypes from 'prop-types'

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/majorfeatures.module.scss';

import Wrap from '../common/Wrap';
import AOS from 'aos';

import BuildPNG from '../../assets/build.png';
import CommunityPNG from '../../assets/community.png';
import { withPrefix } from 'gatsby-link';

class Features extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
      // anchorPlacement: 'top-bottom'
    })
  }

  render() {
    return(
      <Wrap>
        <div className={s.fullWrap}>
            <div className={`${f.row} ${s.featureTile}`} key="1">
              <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.imageWrapper}`} data-aos="fade-right" data-aos-delay="200">
                  <img src={withPrefix('/static/img/build.png')} alt="" />
                </div>
                <div className={`${f.column} ${f['small12']} ${f['medium7']} ${s.contentWrapper}`} data-aos="fade-up" data-aos-delay="400">
                  <h2>build</h2>
                  <div className={s.leftDivider}></div>
                  <p>Build entire legal applications on OpenLaw using our public API.</p>
                    <button className={s.button}>Learn How</button>
                </div>
            </div>
            <div className={`${f.row} ${s.featureTile}`} key="2">
                <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.imageWrapper}`} data-aos="fade-right" data-aos-delay="400">
                    <img src={withPrefix('/static/img/community.png')} alt="" />
                </div>
                <div className={`${f.column} ${f['small12']} ${f['medium7']} ${s.contentWrapper}`} data-aos="fade-up" data-aos-delay="600">
                    <h2>community</h2>
                    <div className={s.leftDivider}></div>
                    <p>We're the home to a passionate group of lawyers committed to rebuilding the legal industry.</p>
                    <button className={s.button}>Join Us</button>
              </div>
            </div>
        </div>
      </Wrap>
    )
  }

};

export default Features;
