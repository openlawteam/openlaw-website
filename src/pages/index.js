import React from 'react';

import Layout from '../components/layout';
import ConquerLegal from '../components/sections/ConquerLegal';
import EliminateGruntWork from '../components/sections/EliminateGruntWork';
import Integrations from '../components/sections/Integrations';
import ModernLaw from '../components/sections/ModernLaw';
// import UncompromisingStandards from '../components/sections/UncompromisingStandards';
import Community from '../components/sections/Community';
import GetStarted from '../components/sections/GetStarted';

const IndexPage = () => (
  <Layout>
    <ConquerLegal />
    <EliminateGruntWork />
    <Integrations />
    <ModernLaw />
    {/* <UncompromisingStandards /> */}
    <Community />
    <GetStarted />
  </Layout>
);

export default IndexPage;
