import React from 'react';
import { withPrefix } from 'gatsby-link';

import Layout from '../components/layout';
import AutomaticLaw from '../components/about/AutomaticLaw';
import ApproachEarly from '../components/about/ApproachEarly';
import ApproachMiddle from '../components/about/ApproachMiddle';
import ApproachLate from '../components/about/ApproachLate';

import s from '../scss/modules/about.module.scss';

const AboutPage = () => (
  <Layout pageTitle={'About'}>
    <div className={s.outerContainer}>
      <div className={s.aboutContainer}>
        <img
          className={s.dashedTop}
          src={withPrefix('/static/img/dashed-top.svg')}
          alt="dashed top"
        />
        <AutomaticLaw />
        <ApproachEarly />
        <ApproachMiddle />
        <ApproachLate />
        <img
          className={s.dashedBottom}
          src={withPrefix('/static/img/dashed-bottom.svg')}
          alt="dashed bottom"
        />
      </div>
    </div>
  </Layout>
);

export default AboutPage;
