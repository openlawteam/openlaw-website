import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import MediaQuery from 'react-responsive';

import f from '../scss/modules/foundation.module.scss';
import s from '../scss/modules/sitenav.module.scss';
import { HEADER_COLLAPSE_DOWN } from '../config/mediaQueries';
import { HamburgerSVG } from './svg/HamburgerSVG';

const EmptyTag = Fragment;

class SiteNav extends Component {
  state = { isMenuOpen: false };

  componentWillUnmount() {
    if (this.state.isMenuOpen) {
      this.closeMenu();
    }
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  };

  closeMenu = () => {
    this.setState({ isMenuOpen: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  };

  renderItems = (data, isSmall) => (
    <ul>
      {data.map(({ name, url, divider, internal }) => (
        <EmptyTag key={`${name}-${url}`}>
          <li>
            {internal ? (
              <Link to="/about">{name}</Link>
            ) : (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            )}
          </li>

          {divider && isSmall && <hr />}
        </EmptyTag>
      ))}
    </ul>
  );

  render() {
    const { data } = this.props;
    const { isMenuOpen } = this.state;

    return (
      <MediaQuery query={HEADER_COLLAPSE_DOWN}>
        {matches => {
          if (matches) {
            return (
              <EmptyTag>
                <HamburgerSVG
                  onClick={this.openMenu}
                  className={`${s.hamburger}`}
                />

                {isMenuOpen && (
                  <div className={`${s.navMenu}`}>
                    {this.renderItems(data, true)}
                  </div>
                )}
              </EmptyTag>
            );
          } else {
            if (isMenuOpen) {
              this.closeMenu();
            }

            return (
              <nav className={s.nav}>
                <div className={`${s.wrapper} ${f.row}`}>
                  {this.renderItems(data)}
                </div>
              </nav>
            );
          }
        }}
      </MediaQuery>
    );
  }
}

export default SiteNav;
