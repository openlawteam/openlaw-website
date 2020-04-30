import React from 'react';
import { graphql } from 'gatsby';

import s from '../scss/modules/subpage.module.scss';

import Helmet from '../components/Helmet';
import Subpage from '../components/Subpage';

export default function SubpageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark, site } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Subpage>
      <Helmet
        meta={[
          {
            name: 'description',
            content: 'Dynamic, Next Generation Legal Agreements',
          },
        ]}
        path={frontmatter.path.replace(/^\//, '')}
        title={`${frontmatter.title} | ${site.siteMetadata.title} — A free legal repository`}
      />
      <div className={s.subpageWrap}>
        <div
          className={`${s.subpage} subpage`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Subpage>
  );
}

export const subpageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
