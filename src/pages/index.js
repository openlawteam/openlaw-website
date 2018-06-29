import React from 'react'

import styles from '../css-modules/index.module.css';
import Layout from '../components/layout'
import LogoSVG from '../components/LogoSVG';
import SignupForm from '../components/SignupForm';

const IndexPage = () => (
  <Layout>
    <h1 className="accessibility">OpenLaw</h1>

    <div className={styles.hero}>
      <div>
        <LogoSVG />

        <p>Imagine a world in which every single human being can freely participate in a just legal system.</p>
        <p>That's our commitment.</p>
      </div>

      <SignupForm />
    </div>
  </Layout>
)

export default IndexPage
