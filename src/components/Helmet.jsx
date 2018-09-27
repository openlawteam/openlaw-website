import React, { Component } from 'react';
import ReactHelmet from 'react-helmet';
import PropTypes from 'prop-types';
import { hostnameContext } from '../helper/url';

class Helmet extends Component {
  canonicalTitle() {
    return `${this.props.title} \u2014 A free regal repository`;
  }

  render() {
    return (
      <ReactHelmet
        title={this.canonicalTitle()}
        meta={this.props.meta}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/static/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon-16x16.png" />
        <link rel="manifest" href="/static/img/site.webmanifest" />
        <link rel="mask-icon" href="/static/img/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:url" content={`${hostnameContext().replace(/\/$/, '')}${window.location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={this.canonicalTitle()} />
        <meta property="og:image" content={`${hostnameContext()}static/img/open-law-og-static.jpg`} />
        <meta property="og:description" content="We are home to a passionate group of people, technologists,
        and dreamers committed to rebuilding the legal industry." />

      </ReactHelmet>
    )
  }
}

Helmet.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.array,
}

export default Helmet
