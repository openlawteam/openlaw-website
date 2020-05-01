import React from 'react';
import AOS from 'aos';
import { withPrefix } from 'gatsby-link';

import s from '../../scss/modules/conquerlegal.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import { hostnameContext } from '../../helper/url';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class ConquerLegal extends React.Component {
  // TODO
  goToRequestAccess = () => {
    window.location.href = '';
  };

  render() {
    return (
      <div className={s.conquerLegal}>
        <div className={f.row}>
          <Wrap>
            <div className={s.tagLine}>
              OpenLaw brings next gen contracts to 1.2 billion Microsoft users.
              <a href="">Read more</a>
            </div>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={`${s.conquerLegalWrapper}`} key="1">
                <div className={f.column} key="1.1">
                  <Header>Conquer Legal Complexities</Header>
                  <Text>
                    Be smart, save money, and close more deals with our digital
                    contracting platform.
                  </Text>
                  <button
                    onClick={this.goToRequestAccess}
                    className={`${s.button} button`}
                  >
                    Request Free Access
                  </button>
                </div>

                <div className={`${f.column} ${s.imgColumn}`} key="1.2">
                  <div className={`${s.imgDiv}`}>
                    <img
                      src={withPrefix('/static/img/ol-agreement.png')}
                      role="presentation"
                      alt="OpenLaw code to agreement document"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default ConquerLegal;
