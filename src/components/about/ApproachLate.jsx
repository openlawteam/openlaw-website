import React from 'react';
import AOS from 'aos';

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/approachlate.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import Wrap from '../common/Wrap';

const Header = ({ children }) => <div className={s.header}>{children}</div>;
const Text = ({ children }) => <p className={`${s.text}`}>{children}</p>;

class ApproachLate extends React.Component {
  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
    });
  }

  render() {
    return (
      <div className={s.approachLateContainer}>
        <div className={f.row}>
          <Wrap>
            <div className={`${f.row} ${s.flexWrapper}`}>
              <div className={s.approachLateWrapper} key="1">
                <div className={f.column} key="1.1">
                  <Header>Approach Late</Header>
                  <Text>
                    Early on, OpenLaw approached the Legal connundrum from the
                    inside out.
                  </Text>
                  <Text>
                    A team of legal engineers with deep experience in an
                    inefficient...
                  </Text>
                </div>

                <div
                  className={f.column}
                  key="1.2"
                  data-aos="fade-up"
                  data-aos-delay="150"
                >
                  <Header>...And Beyond</Header>
                </div>
              </div>
            </div>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default ApproachLate;
