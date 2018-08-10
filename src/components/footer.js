import React, { Component, Fragment } from 'react'

import s from '../scss/modules/footer.module.scss';
import f from '../scss/modules/foundation.module.scss';

import LogoShapeSVG from './svg/LogoShapeSVG';
import FooterNav from './sections/FooterNav';
import FooterData from '../config/footer';
import NewsletterForm from './NewsletterForm';
import CustomLink from './common/Link';
import Wrap from './common/Wrap';

const EmptyTag = Fragment;

class RenderSectionLinks extends Component {
  state = { jobsCallbackData: ''}

  componentDidMount() {
    const thing = this.props.data[this.props.dataKey];
    for (let i = 0; i < thing.length; i += 1) {
      if (thing[i].dataCallback) {
        thing[i].dataCallback()
          .then(value => {
            if (!value) return;
            this.setState({ [`${thing[i].name.toLowerCase()}CallbackData`]: value });
          });
      }
    }
  }

  handleDataToken = (tokenString, data, meta) => {
    const pluralize = (match) => (data.length || data) > 1 ? 's' : '';

    if (!data) {
      return meta;
    }

    return tokenString
      .replace('%data%', data)
      .replace('%plural%', pluralize);
  };

  render () {
    const { data, dataKey:key } = this.props;

    return (
      <div>
        <h3>{key}</h3>
        <ul>
          {data[key].map(({ name, url, meta, dataCallback, token }) => (
            <li key={`${name}-${url}`}>
              <CustomLink to={url}>
                {name}
                {token && <span>{`${this.handleDataToken(token, this.state[`${name.toLowerCase()}CallbackData`], meta)}`}</span>}
                {meta && <span>{meta}</span>}
              </CustomLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

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

          <RenderSectionLinks data={FooterData} dataKey='info' />
          <RenderSectionLinks data={FooterData} dataKey='join' />
          <RenderSectionLinks data={FooterData} dataKey='contact' />
        </div>
      </div>

      <div className={s.footerCopyright}>
        <span>&copy; {year()} Aaron Wright, David Roon, and ConsenSys AG</span>
      </div>
    </div>
  </Wrap>
);

export default Footer;
