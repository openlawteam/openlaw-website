import React, { Component } from 'react';
import { hostnameContext } from '../helper/url';
import styles from '../scss/modules/cookieconsent.module.scss';

const euLaw = {
  // Countries that enforce some version of a cookie law
  hasLaw: [
    'AT',
    'BE',
    'BG',
    'HR',
    'CZ',
    'CY',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'EL',
    'HU',
    'IE',
    'IT',
    'LV',
    'LT',
    'LU',
    'MT',
    'NL',
    'PL',
    'PT',
    'SK',
    'ES',
    'SE',
    'GB',
    'UK',
    'GR',
    'EU'
  ],
};

export default class CookieConsent extends Component {

  componentDidMount() {
    this.getUserIP((ip) => {
      fetch(`${hostnameContext()}geoLocation/${ip}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Geo Location Not Found');
        }
      })
      .then((data) => {
        const countryCode = (data.hasOwnProperty('countryCode')) ? data.countryCode : '';
        return countryCode;
      })
      .then((countryCode) => {
        if (countryCode !== '') {
          const consent = this.checkCookie();
          if (consent === '' && euLaw.hasLaw.indexOf(countryCode) >= 0) {
            document.getElementById('hide-consent-msg').addEventListener('click', this.hideConsentMsg);
            document.getElementById('eu-consent').style.display = 'block';
          } else {
            this.removeConsentMsg();
          }
        }
      })
      .catch(error => console.error(error));
    });
  }

  hideConsentMsg = () => {
    this.setCookie('ACCEPT_OL_CONSENT', 'YES', 365);
    this.removeConsentMsg();
  };

  removeConsentMsg = () => {
    document.getElementById('eu-consent').remove();
  };

  setCookie = (cookieName, cookieValue, exDays) => {
    let d = new Date();
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cookieName + '=' + cookieValue + ';' + expires + ';path=/';
  };

  getCookie = (cookieName) => {
    const name = cookieName + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  };

  checkCookie = () => {
    const consent = this.getCookie('ACCEPT_OL_CONSENT');
    return consent;
  };

  getUserIP = (onNewIP) => { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    const myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    const pc = new myPeerConnection({
      iceServers: []
    });
    const noop = function() {};
    const localIPs = {};
    const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

    function iterateIP(ip) {
      if (!localIPs[ip]) onNewIP(ip);
      localIPs[ip] = true;
    }

    //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer(function(sdp) {
      sdp.sdp.split('\n').forEach(function(line) {
        if (line.indexOf('candidate') < 0) return;
        line.match(ipRegex).forEach(iterateIP);
      });

      pc.setLocalDescription(sdp, noop, noop);
    }, noop);

    //listen for candidate events
    pc.onicecandidate = function(ice) {
      if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
      ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
  };

  render() {
    return (
      <div id="eu-consent" className={styles.cookieConsentContainer} style={{display: 'none'}}>
        <div className={styles.cookieConsent}>
            <p>By using this site, you agree to our use of cookies, which we use to analyse our traffic in accordance with our <a href="https://openlaw.io/privacy?ref=consent" target="_blank" rel="noopener noreferrer">Privacy Policy</a>. We also share information about your use of our site with our analytics partners.</p>
            <button id="hide-consent-msg">
              <svg data-icon="check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                />
              </svg>
              <span>Accept</span>
            </button>
        </div>
      </div>
    );
  }
}
