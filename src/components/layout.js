import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../scss/global.scss';
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
              {
                name: 'description',
                content: 'Dynamic, Next Generation Legal Agreements',
              },
            ]}
            path=""
            title={data.site.siteMetadata.title}
          />
        )}

        <Header subpage={subpage} />
        <Wrap>
          <div className={s.wrapper}>
            <div className={`${s.bodyWrapper}`}>{children}</div>
            <Footer />
          </div>
        </Wrap>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
