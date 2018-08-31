import { FetchBreezyJobs } from '../helper/fetchJobs';

const FooterData = {
  info: [
    {
      name: 'Docs',
      url: 'https://docs.openlaw.io',
    }, {
      name: 'About',
      url: '/about?ref=footer',
    }, {
      name: 'FAQ',
      url: '/faq?ref=footer',
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
      url: 'https://openlaw.io/#register',
    }, {
      name: 'Request a Private Instance',
      url: '/private-instances?ref=footer',
    }, {
      name: 'Jobs',
      token: '(we\u2019re hiring! %data% open position%plural%)',
      url: 'https://careers.openlaw.io',
      dataCallback: FetchBreezyJobs,
    }, {
      name: 'OpenLaw Slack Community',
      url: 'https://openlaw-community.slack.com',
    },
  ],
  contact: [
    {
      name: 'Say hi:',
      meta: 'hello\u0040openlaw.io',
      url: 'mailto:hello@openlaw.io',
    }, {
      name: 'Support:',
      meta: 'support\u0040openlaw.io',
      url: 'mailto:support@openlaw.io',
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
