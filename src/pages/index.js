import React from 'react';

import Layout from '../components/layout';
// import IntroSection from '../components/sections/IntroSection';
import ConquerLegal from '../components/sections/ConquerLegal';
import EliminateGruntWork from '../components/sections/EliminateGruntWork';
// import Toolkit from '../components/sections/Toolkit';
import WeHeartEngineers from '../components/sections/WeHeartEngineers';
import ReadyToStart from '../components/sections/ReadyToStart';

const IndexPage = () => (
  <Layout>
    {/* <IntroSection /> */}
    <ConquerLegal />
    <EliminateGruntWork />
    {/* <Toolkit /> */}
    <WeHeartEngineers />
    <ReadyToStart />
  </Layout>
);

export default IndexPage;
