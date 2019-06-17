import React, {Fragment} from 'react'

import foundation from '../scss/modules/foundation.module.scss';
import baseStyles from '../scss/modules/base.module.scss';

import Layout from '../components/layout';

import IntroSection from '../components/sections/IntroSection';
import BuildingFuture from '../components/sections/BuildingFuture';
import ContractsModel from '../components/sections/ContractsModel';
import LargeQuote from '../components/sections/LargeQuote';
import MajorFeatures from '../components/sections/MajorFeatures';
import Features from '../components/sections/Features';
import OutroSection from '../components/sections/OutroSection';
import CookieConsent from '../components/CookieConsent';

const IndexPage = () => (
  <Fragment>
    <CookieConsent />
    <Layout>
      <IntroSection />
      <BuildingFuture />
      <ContractsModel />
      <LargeQuote />
      <MajorFeatures />
      <Features />
      <OutroSection />
    </Layout>
  </Fragment>
)

export default IndexPage;
