import React from 'react';
import { withPrefix } from 'gatsby-link';

import s from '../../scss/modules/conquerlegal.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class ConquerLegal extends React.Component {
  goToRequestAccess = () => {
    window.open('https://openlawform.typeform.com/to/GYy10G', '_blank');
  };

  render() {
    return (
      <div className={s.conquerLegalContainer}>
        <div className={f.row}>
          <Wrap>
            <div className={s.tagLine}>
              <img
                src={withPrefix('/static/img/news-line.svg')}
                alt="right angle lines"
              />
              <span>
                OpenLaw brings next gen contracts to 1.2 billion Microsoft
                users.{/* TODO: direct to actual location */}
                <a href="#">Read more</a>
              </span>
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
