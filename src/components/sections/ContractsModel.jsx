import React from 'react'
// import PropTypes from 'prop-types'

import foundation from '../../scss/modules/foundation.module.scss';
import styles from '../../scss/modules/contractsmodel.module.scss';

import ContractsModelSVG from '../../components/svg/ContractsModelSVG';
import DarkBlueBoxSVG from '../../components/svg/DarkBlueBoxSVG';
import LightBlueBoxSVG from '../../components/svg/LightBlueBoxSVG';
// import BlueBoxesSVG from '../../components/svg/BlueBoxesSVG';

import Wrap from '../common/Wrap';

const ContractsModel = ({ data }) => (
  <Wrap>

  	<div className={`${foundation.column} ${styles.centered}`}>
	    <ContractsModelSVG />
  	</div>

  	<div className={foundation.column}>
      <div className={styles.content}>
        <div className={`${styles.shape_content_wrapper}`} key="1">
          <h3>contracts are changing</h3>
          <div className={styles.divider}></div>
          <p className={styles.paragraph}>Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
          <DarkBlueBoxSVG />
        </div>
        <div className={`${styles.shape_content_wrapper}`} key="2">
          <h3>create “smart" contracts</h3>
          <div className={styles.divider}></div>
          <p className={styles.paragraph}>Model all or parts of legal agreements using our markup language, decreasing the cost and friction of creating, securing, and generating binding legal agreements.</p>
          <LightBlueBoxSVG />
        </div>
      </div>
		</div>

  </Wrap>
);

export default ContractsModel;
