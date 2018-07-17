import React from 'react'
// import PropTypes from 'prop-types'

import f from '../../scss/modules/foundation.module.scss';
import s from '../../scss/modules/contractsmodel.module.scss';

import ContractsModelSVG from '../../components/svg/ContractsModelSVG';
import DarkBlueBoxSVG from '../../components/svg/DarkBlueBoxSVG';
import LightBlueBoxSVG from '../../components/svg/LightBlueBoxSVG';
// import BlueBoxesSVG from '../../components/svg/BlueBoxesSVG';

import Wrap from '../common/Wrap';

const ContractsModel = ({ data }) => (
  <Wrap>

    <div className={f.row}>
    	<div className={`${f.column} ${s.centered}`}>
  	    <ContractsModelSVG />
    	</div>
      <div className={s.content}>
        <div className={s.shape_content_wrapper} key="1">
          <h3>contracts are changing</h3>
          <div className={s.divider}></div>
          <p className={s.paragraph}>Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
          <DarkBlueBoxSVG />
        </div>
        <div className={`${s.shape_content_wrapper}`} key="2">
          <h3>create “smart" contracts</h3>
          <div className={s.divider}></div>
          <p className={s.paragraph}>Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
          <LightBlueBoxSVG />
        </div>
      </div>
		</div>

  </Wrap>
);

export default ContractsModel;
