import React from 'react'
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/legalprotocol.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import { hostnameContext } from '../../helper/url';

// import LogoShapeSVG from '../../components/svg/LogoShapeSVG';
// import YellowTriangleSVG from '../../components/svg/YellowTriangleSVG';
// import GreyTriangleSVG from '../../components/svg/GreyTriangleSVG';
// import LightBlueShapeSVG from '../../components/svg/LightBlueShapeSVG';

// import bgImage from '../../assets/blueCircle.svg';
// import blueBg from '../../assets/blueBg.png';

import Wrap from '../common/Wrap';

const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>

class LegalProtocol extends React.Component {
	componentDidMount() {
		AOS.init({
			duration: 800,
			offset: 40,
			delay: 120,
			mirror: true,
			once: true,
		})
  }

  goToStartBuilding = () => { window.location.href = `${hostnameContext()}signup`; };

	render() {
    return (
      <div className={s.legalProtocol}>
        <div className={f.row}>
          <Wrap>
            <div className={`${f.row} ${s.flexWrapper}`} >
              <div className={`${s.legalProtocolWrapper}`} key="1">
                <div className={`${f.column} ${s.textHeading}`} key="1.1" data-aos="fade-up" data-aos-delay="450">
                  <H2>The Universal Legal Protocol for Blockchains.</H2>
                  <Text>Blockchains are transforming the way commercial relationships are structured and executed, bringing increased operational efficiencies.</Text>
                  <Text>Putting together a blockchain-based application is cumbersome, expensive, and inefficient. We make building those applications a snap.</Text>
                  <button onClick={this.goToStartBuilding} className={`${s.button} button`}>What will you build?</button>
                </div>

                <div className={`${f.column}`} key="1.2" data-aos="fade-up" data-aos-delay="450">
                  <div className={`${s.imgDiv}`} data-aos="fade-up" data-aos-delay="150">
                    <img src={withPrefix('/static/img/ol-agreement.png')} role="presentation" alt="OpenLaw code to agreement document" />
                  </div>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
	}
};

export default LegalProtocol;
