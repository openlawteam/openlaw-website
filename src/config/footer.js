import { FetchBreezyJobs } from '../helper/fetchJobs';
import { hostnameContext } from '../helper/url';

const FooterData = {
  info: [
    {
      name: 'About',
      url: `${hostnameContext()}about`,
    }, {
      name: 'GitHub',
      url: 'https://github.com/openlawteam',
    }, {
      name: 'Docs',
      url: 'https://docs.openlaw.io',
    }, {
      name: 'FAQ',
      url: `${hostnameContext()}faq`,
    }, {
      name: 'Media Kit',
      url: 'https://openlaw-website.netlify.com/openlaw-media-logos.zip?ref=footer',
    }, {
      name: 'Terms of Use',
      url: '/terms?ref=footer',
    }, {
      name: 'Privacy Policy',
      url: '/privacy?ref=footer',
    },
  ],
  join: [
    {
      name: 'Sign up',
      url: `${hostnameContext()}signup`,
    }, {
      name: 'Request a Private Instance',
      url: '/private-instances?ref=footer',
    }, {
      name: 'Jobs',
      token: ' (we\u2019re hiring! %data% open position%plural%)',
      url: 'https://careers.openlaw.io',
      dataCallback: FetchBreezyJobs,
    }, {
      name: 'OpenLaw Slack Community',
      url: 'https://join.slack.com/t/openlaw-community/shared_invite/enQtMzY1MTA2ODY3ODg5LTg5NjA2ZjAzMjY3YzI0NTU2NmU3ZmU5ZGQ0NjE3YjdkNjRjZGJlNjFjNjg1NzZiM2Q3YjZhNGEzYzEwYTBiMjU',
    },
  ],
  contact: [
    {
      name: 'Say hi:',
      meta: ' hello\u0040openlaw.io',
      url: 'mailto:hello@openlaw.io',
    }, {
      name: 'Support:',
      meta: ' help\u0040openlaw.io',
      url: 'mailto:help@openlaw.io',
    }, {
      name: 'OpenLaw on Medium',
      url: 'https://medium.com/@OpenLawOfficial',
    }, {
      name: 'OpenLaw on Twitter',
      url: 'https://twitter.com/OpenLawOfficial',
    }, {
      name: 'Report a bug',
      url: 'https://github.com/openlawteam/openlaw-issue-tracker',
    },
  ],
};

export default FooterData;
