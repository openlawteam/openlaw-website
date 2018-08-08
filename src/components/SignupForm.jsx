import React, { Component, Fragment } from 'react';

import TextInput from './common/TextInput';
import styles from '../scss/modules/signup.module.scss';

const EmptyTag = Fragment;


const goToOpenLawSignUp = () => { (window.location.href = 'https://openlaw.io/#register') };

const SubmitButton = () => (
  <button onClick={goToOpenLawSignUp} type="button">Sign Up for OpenLaw</button>
);

const PASSWORD_HELP = 'Password must be at least 8 characters with one upper-case letter, one lower-case letter, one number, and one accepted special character (!@#$&*/).';

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
        {/*<form>
          {this.renderInput({ name: 'email', placeholder: 'email@domain.com' })}
          {this.renderInput({ name: 'name', placeholder: 'name' })}
          {this.renderInput({ name: 'password', placeholder: 'password', type: 'password', helpText: PASSWORD_HELP })}

        </form>*/}

        <SubmitButton />

        {/*<p className={`${'text-center'} ${styles.smallText}`}>
          <small>
            By clicking &ldquo;Sign Up for OpenLaw&rdquo;, you agree to our <a href="/terms">terms of
            service</a> and <a href="/privacy">privacy policy</a>. We&rsquo;ll occasionally send you account related emails.
          </small>
        </p>*/}
      </div>
    );
  }
}
