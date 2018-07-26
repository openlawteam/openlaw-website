import React from 'react'
// import PropTypes from 'prop-types'

import '../../../node_modules/aos/dist/aos.css';
import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/contractsmodel.module.scss';

import ContractsModelSVG from '../../components/svg/ContractsModelSVG';

import AOS from 'aos';

import Wrap from '../common/Wrap';

class ContractsModel extends React.Component {

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
        <div className={f.row}>
          <div className={`${f.column} ${s.centered} ${s.imageWrapper}`}>
            <div className={s.svgWrapper} data-aos="fade-right" data-aos-delay="200">
              <ContractsModelSVG />
            </div>
          </div>
          <div className={f.column}>
            <div className={s.content}>
              <div className={`${s.shapeContentWrapper} ${s.blue}`} key="1" data-aos="fade-up" data-aos-delay="200">
                <h3 data-aos="fade-up" data-aos-delay="300">contracts are changing</h3>
                <div className={s.divider}></div>
                <p className={s.paragraph} data-aos="fade-up" data-aos-delay="400">Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
              </div>
              <div className={`${s.shapeContentWrapper} ${s.teal}`} key="2" data-aos="fade-up" data-aos-delay="400">
                <h3 data-aos="fade-up" data-aos-delay="600">create “smart" contracts</h3>
                <div className={s.divider}></div>
                <p className={s.paragraph} data-aos="fade-up" data-aos-delay="800">Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    )
  }

};

export default ContractsModel;
