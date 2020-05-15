import React, { Component } from 'react';

import s from '../scss/modules/footer.module.scss';

import GatsbyLink from 'gatsby-link';
import { withPrefix } from 'gatsby-link';
import { FetchBreezyJobs } from '../helper/fetchJobs';

class RenderJobsLink extends Component {
  state = { jobsCallbackData: '' };

  componentDidMount() {
    FetchBreezyJobs().then(value => {
      if (!value) return;
      this.setState({
        jobsCallbackData: value,
      });
    });
  }

  handleDataToken = (tokenString, data) => {
    const pluralize = match => ((data.length || data) > 1 ? 's' : '');

    return tokenString.replace('%data%', data).replace('%plural%', pluralize);
  };

  render() {
    return (
      <li>
        <a
          href="https://careers.openlaw.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jobs
          {this.state.jobsCallbackData && (
            <span>
              {this.handleDataToken(
                '(we\u2019re hiring! %data% open position%plural%)',
                this.state.jobsCallbackData
              )}
            </span>
          )}
        </a>
      </li>
    );
  }
}

const year = () => new Date().getFullYear();

const Footer = () => (
  <footer className={s.footer}>
    <div>
      <div className={s.footerContent}>
        <div className={`${s.footerSection} ${s.footerSectionInfoAndContact}`}>
          <div className={s.infoColumn}>
            <h3 className={s.footerHeader}>Info</h3>
            <ul>
              <li>
                <a
                  href="https://docs.openlaw.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://openlaw-website.netlify.app/openlaw-media-logos.zip">
                  Media Kit
                </a>
              </li>
              <li>
                <GatsbyLink to="/terms">Terms of Use</GatsbyLink>
              </li>
              <li>
                <GatsbyLink to="/privacy">Privacy Policy</GatsbyLink>
              </li>
            </ul>
          </div>
          <div className={s.contactColumn}>
            <h3 className={s.footerHeader}>Contact</h3>
            <ul>
              <li>
                <a
                  href="mailto:hello@openlaw.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Say Hi:<span>hello@openlaw.io</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:help@openlaw.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support:<span>help@openlaw.io</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/openlawteam/openlaw-issue-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Report a bug
                </a>
              </li>
              <RenderJobsLink />
            </ul>
          </div>
        </div>

        <div className={s.footerSection}>
          <div>
            <a
              className={s.footerSocialLink}
              href="https://twitter.com/openlawofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.footerSocialIcon}
                src={withPrefix('/static/img/twitter-brands.svg')}
                alt="OpenLaw Twitter"
              />
            </a>
            <a
              className={s.footerSocialLink}
              href="https://github.com/openlawteam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.footerSocialIcon}
                src={withPrefix('/static/img/github-brands.svg')}
                alt="OpenLaw GitHub"
              />
            </a>
            <a
              className={s.footerSocialLink}
              href="https://medium.com/@OpenLawOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.footerSocialIcon}
                src={withPrefix('/static/img/medium-brands.svg')}
                alt="OpenLaw Medium"
              />
            </a>
            <a
              className={s.footerSocialLink}
              href="https://join.slack.com/t/openlaw-community/shared_invite/enQtMzY1MTA2ODY3ODg5LTg5NjA2ZjAzMjY3YzI0NTU2NmU3ZmU5ZGQ0NjE3YjdkNjRjZGJlNjFjNjg1NzZiM2Q3YjZhNGEzYzEwYTBiMjU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={s.footerSocialIcon}
                src={withPrefix('/static/img/slack-brands.svg')}
                alt="OpenLaw Slack"
              />
            </a>
          </div>
          <div className={s.footerCopyright}>
            <span className={s.copyrightSymbol}>&copy;</span> {year()} Aaron
            Wright, David Roon, and ConsenSys AG
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
