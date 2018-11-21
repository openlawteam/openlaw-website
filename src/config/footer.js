import { FetchBreezyJobs } from '../helper/fetchJobs';
import { hostnameContext } from '../helper/url';

const FooterData = {
  info: [
    {
      name: 'About',
      url: '/about?ref=footer',
    }, {
      name: 'Github',
      url: 'https://github.com/openlawteam',
    }, {
      name: 'Docs',
      url: 'https://docs.openlaw.io',
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
      url: `${hostnameContext()}signup`,
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
      url: 'https://join.slack.com/t/openlaw-community/shared_invite/enQtMzY1MTA2ODY3ODg5LTc0ZGQ4OTEwMDEyMGUxMzJmMDVmNzM1ODRmNTdkNDIyNDkyOGU0NmRkMmRlMmY3ZTMwYzNlOTFiMzUwZjJkOTk',
    },
  ],
  contact: [
    {
      name: 'Say hi:',
      meta: 'hello\u0040openlaw.io',
      url: 'mailto:hello@openlaw.io',
    }, {
      name: 'Support:',
      meta: 'help\u0040openlaw.io',
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
