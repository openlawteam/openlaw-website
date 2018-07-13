import React from 'react'
// import PropTypes from 'prop-types'

// import styles from '../../scss/modules/buildingfuture.module.scss';
import foundation from '../../scss/modules/foundation.module.scss';
import Wrap from '../common/Wrap';

const BuildingFuture = ({ data }) => (
  <Wrap>
    <div className={foundation.column}>
	  	<h1>Building the Future of Law</h1>
    </div>
  </Wrap>
);

export default BuildingFuture;
