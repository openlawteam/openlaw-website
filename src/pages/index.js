import React from 'react'

// import foundation from '../scss/modules/foundation.module.scss';
// import baseStyles from '../scss/modules/base.module.scss';

import Layout from '../components/layout';

import IntroSection from '../components/sections/IntroSection';
// import BuildingFuture from '../components/sections/BuildingFuture';
import Toolkit from '../components/sections/Toolkit';
// import ContractsModel from '../components/sections/ContractsModel';
// import LargeQuote from '../components/sections/LargeQuote';
// import MajorFeatures from '../components/sections/MajorFeatures';
// import Features from '../components/sections/Features';
// import OutroSection from '../components/sections/OutroSection';
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
    {/* <BuildingFuture /> */}
		{/* <ContractsModel /> */}
    {/* <LargeQuote /> */}
		{/* <MajorFeatures /> */}
		{/* <Features /> */}
		{/* <OutroSection /> */}
	</Layout>
)

export default IndexPage;
