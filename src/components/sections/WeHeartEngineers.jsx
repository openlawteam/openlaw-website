import React from 'react'
import AOS from 'aos';

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import irBlack from 'react-syntax-highlighter/dist/esm/styles/hljs/ir-black';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/weheartenigneers.module.scss';
import Wrap from '../common/Wrap';
import { hostnameContext } from '../../helper/url';
import { HeartSVG } from '../../components/svg/HeartSVG';
import { CaretRightSVG } from '../../components/svg/CaretRightSVG';

SyntaxHighlighter.registerLanguage('javascript', js);

const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>
const editorValue =
`// import both modules
import { APIClient, Openlaw } from "openlaw";

// Include the root URL for the OpenLaw instance.
apiClient = new APIClient('https://app.openlaw.io');

apiClient.login('openlawuser+1@gmail.com', 'password');

apiClient.getTemplate('Advisor Agreement').then(result => {
  console.log(result);
});

const compiledTemplate = Openlaw.compileTemplate(
  'This Advisor Agreement is entered into between [[Company Name]] ("Corporation") and [[Advisor Name]] ("Advisor") as of [[Effective Date: Date]] ("Effective Date"). Company and Advisor agree as follows: \n\n^**Services**. Advisor agrees to consult with and advise Company from time to time, at Company\'s request (the "Services").'
);

console.log(compiledTemplate);
`;

class WeHeartEngineers extends React.Component {

  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    });
  }

  goToStartBuilding = () => { window.location.href = `${hostnameContext()}signup`; };

  render() {
    return(
      <Wrap>
        <div className={`${s.flexWrapper} ${f.row}`}>
          <H2>We <span className={`${s.heartIcon}`}><HeartSVG /></span> Engineers</H2>
          <Text>You can build a blockchain-based application in an afternoon</Text>
        </div>
        <div className={`${f.row}`}>
          <div className={`${f.column} ${s.syntax}`} key="1" data-aos="fade-up" data-aos-delay="150">
            <SyntaxHighlighter language="javascript" style={irBlack}>
              {editorValue}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className={`${f.row}`}>
          <div className={`${f.column} ${s.ctaWrapper}`} key="4" data-aos="fade-up" data-aos-delay="450">
            <button onClick={this.goToStartBuilding} className={`${s.button} button`}>Start Building</button>
            <br />
            <a className="link-arrow-small caret-right" href="https://docs.openlaw.io/">Full Reference API Documentation <CaretRightSVG /></a>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default WeHeartEngineers;
