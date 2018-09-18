import React from 'react'
import { withPrefix } from 'gatsby-link';
import AOS from 'aos';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/majorfeatures.module.scss';

import Wrap from '../common/Wrap';
import { hostnameContext } from '../../helper/url';

import BuildSVG from '../../components/svg/BuildSVG';
import CommunitySVG from '../../components/svg/CommunitySVG';

const Text = ({ children }) => <p className={`${s.p}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>

class Features extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    })
  }

  goToDocs = () => { window.location.href = 'https://docs.openlaw.io'; };
  goToSignUp = () => { window.location.href = `${hostnameContext()}signup`; };

  render() {
    return(
      <Wrap>
        <div className={s.fullWrap}>
          <div className={`${f.row} ${s.featureTile}`} key="1">
            <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.imageWrapper}`} data-aos="fade-right" data-aos-delay="200">
              <BuildSVG style={{ width: '90%', height: '90%' }} />
            </div>

            <div className={`${f.column} ${f['small12']} ${f['medium7']} ${s.contentWrapper}`} data-aos="fade-up" data-aos-delay="400">
              <H2>Build</H2>
              <div className={s.leftDivider}></div>
              <Text>Build entire legal applications on OpenLaw using our public API.</Text>
                <button onClick={this.goToDocs} className={s.button}>Learn How</button>
            </div>
          </div>

          <div className={`${f.row} ${s.featureTile}`} key="2">
            <div className={`${f.column} ${f['small12']} ${f['medium5']} ${s.imageWrapper}`} data-aos="fade-right" data-aos-delay="400">
              <CommunitySVG style={{ width: '90%', height: '90%' }} />
            </div>

            <div className={`${f.column} ${f['small12']} ${f['medium7']} ${s.contentWrapper}`} data-aos="fade-up" data-aos-delay="600">
              <H2>Community</H2>
              <div className={s.leftDivider}></div>
              <Text>We’re the home to a passionate group of people, technologists, and dreamers committed to rebuilding the legal industry.</Text>
              <button onClick={this.goToSignUp} className={s.button}>Join Us</button>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default Features;
