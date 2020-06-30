import React from 'react';

import Layout from '../components/layout';
import AutomaticLaw from '../components/about/AutomaticLaw';
import ApproachEarly from '../components/about/ApproachEarly';
import ApproachMiddle from '../components/about/ApproachMiddle';
import ApproachLate from '../components/about/ApproachLate';

import s from '../scss/modules/about.module.scss';

const AboutPage = () => (
  <Layout pageTitle={'About'}>
    <div className={s.aboutContainer}>
      <AutomaticLaw />
      <ApproachEarly />
      <ApproachMiddle />
      <ApproachLate />
    </div>
  </Layout>
);

export default AboutPage;
