import React from 'react'
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';
import brace from 'brace';
import AceEditor from 'react-ace';

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/weheartenigneers.module.scss';
import Wrap from '../common/Wrap';
import { hostnameContext } from '../../helper/url';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>
const H2 = ({ children }) => <h2 className={`${s.h2}`}>{children}</h2>
const editorValue =
`
// import both modules
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
          <H2>We [heart] Engineers</H2>
          <Text>You can build a blockchain-based application in an afternoon</Text>
        </div>
        <div className={`${f.row}`}>
          <div className={`${f.column} ${s.svgWrapper}`} key="1" data-aos="fade-up" data-aos-delay="150">
            <AceEditor
              className={`${s.apiSnippet}`}
              mode="javascript"
              theme="monokai"
              name="api-snippet"
              fontSize={14}
              showPrintMargin={false}
              showGutter={false}
              highlightActiveLine={false}
              value={editorValue}
              readOnly
              wrapEnabled
              setOptions={{
                tabSize: 2,
              }}
              editorProps={{$blockScrolling: true}}
            />
          </div>
        </div>
        <div className={`${f.row}`}>
          <div className={`${f.column} ${s.ctaWrapper}`} key="4" data-aos="fade-up" data-aos-delay="450">
            <button onClick={this.goToStartBuilding} className={`${s.button} button`}>Start Building</button>
            <br />
            <a className="link-arrow-small" href="/">Full Reference API Documentation</a>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default WeHeartEngineers;
