import React from 'react';

import Layout from '../components/layout';
import IntroSection from '../components/sections/IntroSection';
import Toolkit from '../components/sections/Toolkit';
import WeHeartEngineers from '../components/sections/WeHeartEngineers';
import ReadyToStart from '../components/sections/ReadyToStart';
import LegalProtocol from '../components/sections/LegalProtocol';

const IndexPage = () => (
  <Layout>
    <IntroSection />
    <LegalProtocol />
    <Toolkit />
    <WeHeartEngineers />
    <ReadyToStart />
  </Layout>
);

export default IndexPage;
