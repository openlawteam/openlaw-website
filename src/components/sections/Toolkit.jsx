import React from 'react'
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/toolkit.module.scss';
import Wrap from '../common/Wrap';

const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>
const H3 = ({ children }) => <h3 className={`${s.h3}`}>{children}</h3>

class Toolkit extends React.Component {
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
      <Wrap className={s.wrap}>
        <div className={`${s.flexWrapper} ${f.row}`}>
          <H2>A Complete Toolkit For Blockchain-Based Applications</H2>
          <Text>Focus on your product. We've got the blockchain pieces handled.</Text>
        </div>

        <div className={`${f.row} ${s.columnWrapper}`}>
          <div className={`${f.column} ${s.imgWrapper}`} key="1" data-aos="fade-up" data-aos-delay="150">
            <div className={`${s.imgDiv}`} data-aos="fade-up" data-aos-delay="150">
              <span className={`${s.imgSpan} ${s.firstDraftSpan}`}>
                <img className={`${s.firstDraft}`} src={withPrefix('/static/img/first-draft.png')} role="presentation" alt="First Draft" />
              </span>
            </div>
            <div className={`${s.contentDiv}`}>
              <H3>First Draft</H3>
              <Text>Use our markup language and extensible legal agreement components to rapidly generate any legal agreement.</Text>
            </div>
          </div>

          <div className={`${f.column} ${s.imgWrapper}`} key="2" data-aos="fade-up" data-aos-delay="300">
            <div className={`${s.imgDiv}`}>
              <span className={`${s.imgSpan} ${s.ethereumRelayerSpan}`}>
                <img className={`${s.ethereumRelayer}`} src={withPrefix('/static/img/ethereum-relayer.png')} role="presentation" alt="Ethereum Relayer" />
              </span>
            </div>
            <div className={`${s.contentDiv}`}>
              <H3>Relayer</H3>
              <Text>Securely relay and trigger any Ethereum smart contract call using OpenLaw, including recurring calls.</Text>
            </div>
          </div>
        </div>

        <div className={`${f.row} ${s.columnWrapper}`}>
          <div className={`${f.column} ${s.imgWrapper}`} key="3" data-aos="fade-up" data-aos-delay="300">
            <div className={`${s.imgDiv}`}>
              <span className={`${s.imgSpan} ${s.signSendSpan}`}>
                <img className={`${s.signSend}`} src={withPrefix('/static/img/sign-send.png')} role="presentation" alt="Sign &amp; Send" />
              </span>
            </div>
            <div className={`${s.contentDiv}`}>
              <H3>Sign &amp; Store</H3>
              <Text>Secure any signature to a blockchain using our e-signature solution.</Text>
            </div>
          </div>

          <div className={`${f.column} ${s.imgWrapper}`} key="4" data-aos="fade-up" data-aos-delay="450">
            <div className={`${s.imgDiv}`}>
              <span className={`${s.imgSpan} ${s.tokenForgeSpan}`}>
                <img className={`${s.tokenForge}`} src={withPrefix('/static/img/token-forge.png')} role="presentation" alt="Token Forge" />
              </span>
            </div>
            <div className={`${s.contentDiv}`}>
              <H3>Token Forge &amp; Smart Contract Components</H3>
              <Text>Automatically generate blockchain-based tokens, tied to underlying legal agreements.</Text>
            </div>
          </div>
        </div>

        <div className={`${f.row} ${s.columnWrapper}`}>
          <div className={`${f.column} ${s.imgWrapper}`} key="5" data-aos="fade-up" data-aos-delay="450">
            <div className={`${s.imgDiv}`}>
              <span className={`${s.imgSpan} ${s.formsFlowSpan}`}>
                <img className={`${s.formsFlow}`} src={withPrefix('/static/img/forms-flow.png')} role="presentation" alt="Forms &amp; Flow" />
              </span>
            </div>
            <div className={`${s.contentDiv}`}>
              <H3>Forms &amp; Flows</H3>
              <Text>Create walk throughs of complex business agreements using our Forms tool.</Text>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default Toolkit;
