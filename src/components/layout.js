import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { withPrefix } from 'gatsby-link';
import 'typeface-hind';
import 'typeface-nunito';

import '../scss/global.scss';
import f from '../scss/modules/foundation.module.scss';
import s from '../scss/modules/base.module.scss';

import Header from './header';
import Helmet from './Helmet';
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
        {!subpage && (
          <Helmet
            meta={[
              { name: 'description', content: 'Dynamic, Next Generation Legal Agreements' },
            ]}
            path=""
            title={`${data.site.siteMetadata.title} — A free legal repository`}
          />
        )}

        <Header subpage={subpage} />
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
