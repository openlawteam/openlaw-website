import React from 'react'
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/readytostart.module.scss';
import Wrap from '../common/Wrap';
import { hostnameContext } from '../../helper/url';
import { CaretRightSVG } from '../../components/svg/CaretRightSVG';

const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>

class ReadyToStart extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    })
  }

  goToSignUp = () => { window.location.href = `${hostnameContext()}signup`; };

  render() {
    return(
      <Wrap>
        <div className={`${s.flexWrapper} ${f.row}`}>
          <div className={`${s.imgDiv}`} data-aos="fade-up" data-aos-delay="150">
            <img src={withPrefix('/static/img/code-screen.png')} role="presentation" alt="Code on screen" />
          </div>

          <div className={`${f.column} ${s.svgWrapper}`} key="1" data-aos="fade-up" data-aos-delay="450">
            <H2>Ready to Get Started?</H2>
            <Text>Create a private environment. Sign up in minutes and create a private blockchain-based environment for your team.</Text>
            <button onClick={this.goToSignUp} className={`${s.button} button`}>Sign Up</button>
            <br />
            <a className="link-arrow-small caret-right" href="mailto:hello@openlaw.io">Undecided? Talk to an expert <CaretRightSVG /></a>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default ReadyToStart;
