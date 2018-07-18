import React from 'react'

import baseStyles from '../scss/modules/base.module.scss';
import foundation from '../scss/modules/foundation.module.scss';

import Layout from '../components/layout';

import IntroSection from '../components/sections/IntroSection';
import BuildingFuture from '../components/sections/BuildingFuture';
import ContractsModel from '../components/sections/ContractsModel';
import LargeQuote from '../components/sections/LargeQuote';
import MajorFeatures from '../components/sections/MajorFeatures';
import Features from '../components/sections/Features';
import OutroSection from '../components/sections/OutroSection';

const IndexPage = () => (
    <div>
        <Layout>
            <h1 className={baseStyles.hidden}>OpenLaw</h1>
            <IntroSection />
            <BuildingFuture />
            <ContractsModel />
            <LargeQuote />
            <div className={`${foundation.row}`}>
                <MajorFeatures />
            </div>
            <Features />
            <OutroSection />
        </Layout>
    </div>
)

export default IndexPage;
