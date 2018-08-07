import React, { Component, Fragment } from 'react'

import s from '../scss/modules/Footer.module.scss';
import f from '../scss/modules/foundation.module.scss';

import LogoShapeSVG from './svg/LogoShapeSVG';
import FooterNav from './sections/FooterNav';
import FooterData from '../config/footer';
import NewsletterForm from './NewsletterForm';
import Wrap from './common/Wrap';

const EmptyTag = Fragment;

const renderSectionLinks = (data, key) => (
  <div>
    <h3>{key}</h3>
    <ul>
      {data[key].map(({ name, url, meta }) => (
        <li key={`${name}-${url}`}>
          <a href={url}>{name} {meta && <span>{`${meta}`}</span>}</a>
        </li>
      ))}
    </ul>
  </div>
);

const year = () => new Date().getFullYear();

const Footer = () => (
  <Wrap className={s.footerWrap}>
    <div className={`${f.row}`}>
      <div className={s.footer}>
        <LogoShapeSVG className={`${s.footerLogo}`} />

        <div className={s.flexWrap}>
          <div>
            <h3>Join our newsletter</h3>

            <div className={s.inputWrap}>
              <NewsletterForm />
            </div>
          </div>

          {renderSectionLinks(FooterData, 'info')}
          {renderSectionLinks(FooterData, 'join')}
          {renderSectionLinks(FooterData, 'contact')}
        </div>
      </div>

      <div className={s.footerCopyright}>
        <span>&copy; {year()} Aaron Wright, David Roon, and ConsenSys AG</span>
      </div>
    </div>
  </Wrap>
);

export default Footer;
