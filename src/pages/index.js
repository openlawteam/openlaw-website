import React from 'react'

import baseStyles from '../scss/modules/base.module.scss';
import Layout from '../components/layout'
import LogoSVG from '../components/LogoSVG';
import SignupForm from '../components/SignupForm';
import Wrap from '../components/Wrap';

const IndexPage = () => (
  <Layout>
    <h1 className={baseStyles.hidden}>OpenLaw</h1>

    <Wrap>
      <div>
        <LogoSVG />

        <p>Imagine a world in which every single human being can freely participate in a just legal system.</p>
        <p>That's our commitment.</p>
      </div>

      <SignupForm />
    </Wrap>
  </Layout>
)

export default IndexPage;
