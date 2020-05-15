import React from 'react';
import { withPrefix } from 'gatsby-link';

import s from '../../scss/modules/integrations.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={s.text}>{children}</p>;

class Integrations extends React.Component {
  render() {
    return (
      <div className={s.outerContainer}>
        <div className={s.integrationsContainer}>
          <div className={f.row}>
            <Wrap>
              <div className={s.headerOuterContainer}>
                <div className={s.headerInnerContainer}>
                  <Header>Simple, Secure, and Easy</Header>
                </div>
              </div>
              <Text>
                Simple setup, enterprise grade security, and seamless
                integration with your day-to-day tools.
              </Text>
              <div className={`${f.row} ${s.flexWrapper}`}>
                <div className={`${s.integrationsWrapper}`} key="1">
                  <div className={`${s.brandContainer}`} key="1.1">
                    <img
                      src={withPrefix('/static/img/google-drive-brands.svg')}
                      alt="Google Drive"
                    />
                    <img
                      src={withPrefix('/static/img/microsoft-excel.svg')}
                      alt="Microsoft Excel"
                    />
                  </div>

                  <div className={`${s.brandContainer}`} key="1.2">
                    <img
                      src={withPrefix('/static/img/microsoft-word.svg')}
                      alt="Microsoft Word"
                    />
                    <img
                      src={withPrefix('/static/img/dropbox-brands.svg')}
                      alt="Dropbox"
                    />
                  </div>
                </div>
              </div>
            </Wrap>
          </div>
        </div>
      </div>
    );
  }
}

export default Integrations;
