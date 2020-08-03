import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '../scss/global.scss';
import s from '../scss/modules/base.module.scss';

import Header from './header';
import Helmet from './Helmet';
import Footer from './footer';
import Wrap from './common/Wrap';

const HelmetComponent = (data, pageTitle) => {
  return pageTitle ? (
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'Dynamic, Next Generation Legal Agreements',
        },
      ]}
      path={pageTitle.toLowerCase().replace(/\s+/g, '_')}
      title={`${pageTitle} | ${data.site.siteMetadata.title}`}
    />
  ) : (
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
  );
};

const Layout = ({ children, data, subpage, pageTitle }) => (
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
        {!subpage && HelmetComponent(data, pageTitle)}

        <Header subpage={subpage} pageTitle={pageTitle} />
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
