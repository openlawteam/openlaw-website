import React from 'react';
import ReactHelmet from 'react-helmet';
import PropTypes from 'prop-types';
import { websiteURL } from '../helper/url';

const Helmet = props => (
  <ReactHelmet title={props.title} meta={props.meta}>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/static/img/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/static/img/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/static/img/favicon-16x16.png"
    />
    <link rel="manifest" href="/static/img/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/static/img/safari-pinned-tab.svg"
      color="#333333"
    />
    <link rel="shortcut icon" href="/static/img/favicon.ico" />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="theme-color" content="#333333" />

    <meta property="og:url" content={`${websiteURL()}${props.path}`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={props.title} />
    <meta
      property="og:image"
      content="https://openlaw-website.netlify.com/openlaw-horizontal-2x.png"
    />
    <meta
      property="og:description"
      content="We are home to a passionate group of people, technologists,
    and dreamers committed to rebuilding the legal industry."
    />
    <meta property="fb:app_id" content="2176612205910168" />
  </ReactHelmet>
);

Helmet.propTypes = {
  meta: PropTypes.array,
  path: PropTypes.string,
  title: PropTypes.string,
};

export default Helmet;
