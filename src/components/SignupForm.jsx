import React, { Component, Fragment } from 'react';

import TextInput from './common/TextInput';
import styles from '../scss/modules/signup.module.scss';
import { hostnameContext } from '../helper/url';

const H1 = ({ children }) => <h1 className={`${styles.h1}`}>{children}</h1>

const EmptyTag = Fragment;

// const goToOpenLawSignUp = () => { (window.location.href = `${hostnameContext()}signup`) };

const SubmitButton = (props) => (
  // onClick={goToOpenLawSignUp}
  <button type="submit" className="button" disabled={props.isDisabled}>Get Started</button>
);

// const PASSWORD_HELP = 'Password must be at least 8 characters.';

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default class SignupForm extends Component {
  state = {
    isInValidEmail: false,
    isDisabled: false,
    email: '',
  };

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(validateEmail(this.state.email));
    if (!validateEmail(this.state.email)) {
      this.setState({
        isInValidEmail: true,
      });
      return;
    }

    this.setState({
      isInValidEmail: false,
      isDisabled: true,
    });

    fetch(`${hostnameContext()}signup?email=${this.state.email}`, {
      method: 'GET',
    })
    .then(() => {
      window.location.href = `${hostnameContext()}signup?email=${this.state.email}`;
    })
    .catch(() => {
      this.setState({
        isDisabled: false,
      });
    });
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
        name={name}
      />
      {helpText && <small className={`${styles.helpText}`}>{helpText}</small>}
    </EmptyTag>
  )

  render() {
    return (
      <div className={styles.signup}>
        <div>
          <H1>Build borderless commericial systems on the blockchain.</H1>
        </div>
        <div className={`${styles.signUpForm}`}>
          <form onSubmit={this.handleSubmit} encType="application/x-www-form-urlencoded">
            {this.renderInput({ name: 'email', placeholder: 'email@domain.com' })}
            {/* {this.renderInput({ name: 'name', placeholder: 'name' })}
            {this.renderInput({ name: 'password', placeholder: 'password', type: 'password', helpText: PASSWORD_HELP })} */}
            <SubmitButton
              isDisabled={this.state.isDisabled}
            />
          </form>
        </div>

        {this.state.isInValidEmail && (
          <small className={styles.errorMessage}>That didn&rsquo;t work <span role="img" aria-label="sad face">&nbsp;😕</span>. Try again?</small>
        )}

        <p className={`${'text-center'} ${styles.smallText}`}>
          <small>
            Start building with OpenLaw for <a href={`${hostnameContext()}signup`}>free</a>.
          </small>
          <small>
            Questions? Contact our <a href="mailto:hello@openlaw.io">sales team</a>.
          </small>
        </p>
      </div>
    );
  }
}
