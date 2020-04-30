import React, { Component, Fragment } from 'react';
import MediaQuery from 'react-responsive';

import f from '../scss/modules/foundation.module.scss';
import s from '../scss/modules/sitenav.module.scss';
import { HEADER_MEDIUM_DOWN } from '../config/mediaQueries';
import { HamburgerSVG } from './svg/HamburgerSVG';

const EmptyTag = Fragment;

class SiteNav extends Component {
  state = { isPopupOpen: false };

  handleOpen = () => {
    this.setState({ isPopupOpen: !this.state.isPopupOpen });
  };

  renderItems = (data, isSmall) => (
    <ul>
      {data.map(({ name, url, divider }) => (
        <EmptyTag key={`${name}-${url}`}>
          <li onClick={() => isSmall && this.handleOpen()}>
            <a href={url}>{name}</a>
          </li>

          {divider && isSmall && <hr />}
        </EmptyTag>
      ))}
    </ul>
  );

  render() {
    const { data } = this.props;
    const { isPopupOpen } = this.state;

    return (
      <MediaQuery query={HEADER_MEDIUM_DOWN}>
        {matches => {
          if (matches) {
            return (
              <EmptyTag>
                <HamburgerSVG
                  onClick={this.handleOpen}
                  className={`${s.hamburger}`}
                />

                {isPopupOpen && (
                  <div className={`${s.navPopup}`}>
                    {this.renderItems(data, true)}
                  </div>
                )}
              </EmptyTag>
            );
          }

          return (
            <nav className={s.nav}>
              <div className={`${s.wrapper} ${f.row}`}>
                {this.renderItems(data)}
              </div>
            </nav>
          );
        }}
      </MediaQuery>
    );
  }
}

export default SiteNav;
