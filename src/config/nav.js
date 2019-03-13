import { hostnameContext } from '../helper/url';

const NavData = [
  {
    name: 'Developers',
    url: '/',
  },
  {
    name: 'Products',
    url: '/',
  },
  {
    name: 'Use Cases',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
    divider: true,
  },
  {
  // }, {
  //   name: 'Private Instances',
  //   url: '/private-instances',
  // }, {
  //   name: 'All Templates',
  //   url: 'https://app.openlaw.io/templates',
  // }, {
  //   name: 'GitHub',
  //   url: 'https://github.com/openlawteam',
  // }, {
  //   name: 'Docs',
  //   url: 'https://docs.openlaw.io',
  // }, {
  //   name: 'Contact',
  //   url: 'mailto:hello@openlaw.io',
  //   divider: true,
  // }, {
    name: 'Log In',
    url: `${hostnameContext()}login`,
  }, {
    name: 'Sign up',
    url: `${hostnameContext()}signup`,
  },
];

export default NavData;
