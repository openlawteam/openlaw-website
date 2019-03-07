import React, { Component, Fragment } from 'react';

import TextInput from './common/TextInput';
import styles from '../scss/modules/signup.module.scss';
import { hostnameContext } from '../helper/url';

const EmptyTag = Fragment;


const goToOpenLawSignUp = () => { (window.location.href = `${hostnameContext()}signup`) };

const SubmitButton = () => (
  <button onClick={goToOpenLawSignUp} type="button">Get Started</button>
);

const PASSWORD_HELP = 'Password must be at least 8 characters.';

export default class SignupForm extends Component {
  state = {}

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  }

  renderInput = ({ helpText, name, placeholder, type }) => (
    <EmptyTag>
      <TextInput
        autoCapitalize="off"
        autoComplete="off"
        placeholder={placeholder}
        onChange={(event) => this.onInputChange(name, event.target.value)}
        type={type || 'text'}
        value={this.state[name]}
      />
      {helpText && <small className={`${styles.helpText}`}>{helpText}</small>}
    </EmptyTag>
  )

  render() {
    return (
      <div className={styles.signup}>
        <div data-aos="fade-up" data-aos-delay="300">
          <h1>Build borderless commericial systems on the blockchain.</h1>
        </div>
        <form>
          {this.renderInput({ name: 'email', placeholder: 'email@domain.com' })}
          {/* {this.renderInput({ name: 'name', placeholder: 'name' })}
          {this.renderInput({ name: 'password', placeholder: 'password', type: 'password', helpText: PASSWORD_HELP })} */}
        </form>

        <SubmitButton />

        <p className={`${'text-center'} ${styles.smallText}`}>
          <small>
            Start building with OpenLaw for <a href="/">free</a><br />
            Questions? Contact our <a href="/">sales team.</a>
          </small>
        </p>
      </div>
    );
  }
}
