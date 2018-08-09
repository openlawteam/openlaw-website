import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link';
import 'typeface-hind';
import 'typeface-nunito';

import '../scss/global.scss';
import f from '../scss/modules/foundation.module.scss';
import s from '../scss/modules/base.module.scss';
import i from '../scss/modules/intro.module.scss';

import Header from './header';
import Footer from './footer';
import Wrap from './common/Wrap';

const Layout = ({ children, data, subpage }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header subpage={subpage} siteTitle={data.site.siteMetadata.title} />
        <Helmet
          title={`${data.site.siteMetadata.title} \u2014 A free legal repository`}
          meta={[
            { name: 'description', content: 'Dynamic, Next Generation Legal Agreements' },
          ]}
        >
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png" />
          <link rel="manifest" href="/static/img/site.webmanifest" />
          <link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#ffc40d" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
        <Wrap>
          <div className={s.wrapper}>
            <div className={`${f.row} ${s.imageWrap}`}>
              <img
                className={(subpage ? `${s.funBunch} ${s.funBunchSubpage}` : s.funBunch)}
                src={withPrefix('/static/img/fun-bunch.png')}
                alt=""
              />
              {!subpage && (
                <img
                  className={s.funBunchBw}
                  src={withPrefix('/static/img/fun-bunch-bw.png')}
                  alt=""
                />
              )}
            </div>

            {children}
            <Footer />
          </div>
        </Wrap>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
