import React from 'react'
// import PropTypes from 'prop-types'

import '../../../node_modules/aos/dist/aos.css';
import s from '../../scss/modules/largequote.module.scss';
import f from '../../scss/modules/foundation.module.scss';

import AOS from 'aos';
import Wrap from '../common/Wrap';

class LargeQuote extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: true,
      once: true,
      // anchorPlacement: 'top-bottom'
    })
  }

  render() {
    return(
      <Wrap>
        <div className={s.largeQuote}>
          <div className={s.outerBorder} data-aos="fade" data-aos-delay="200">
            <div className={s.middleBorder} data-aos="fade" data-aos-delay="600">
              <div className={s.innerBorder} data-aos="fade" data-aos-delay="1000">
                <div className={f.row}>
                  <div className={`${f.column} ${f.small12} ${f.medium8} ${s.blockCenter} ${f.large7} ${f.alignCenter}`}>
                    <h1 data-aos="fade" data-aos-delay="700">OpenLaw brings lawyers to work together on legal templates for the benefit of everyone.</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default LargeQuote;
