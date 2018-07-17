import React, { Component } from 'react';

import TextInput from './common/TextInput';
import styles from '../scss/modules/signup.module.scss';

const SubmitButton = () => (
  <button type="submit">Sign Up for OpenLaw</button>
);

export default class SignupForm extends Component {
  state = {}

  onInputChange = (inputName, value) => {
    this.setState({ [inputName]: value });
  }

  renderInput = (name, placeholder) => (
    <TextInput
      autoCapitalize="off"
      autoComplete="off"
      placeholder={placeholder}
      onChange={(event) => this.onInputChange(name, event.target.value)}
      value={this.state[name]}
    />
  )

  render() {
    return (
      <div className={styles.signup}>
        <h2 className={styles.title}>join the movement</h2>

        <form>
          {this.renderInput('email', 'email@domain.com')}
          {this.renderInput('name', 'name')}
          {this.renderInput('password', 'password')}
          <SubmitButton />
        </form>

        <p className={`${'text-center'} ${styles.smallText}`}>
          <small>
            By clicking “Sign Up for OpenLaw,” you agree to our <a href="#">terms of
            service</a> and <a href="#">privacy policy</a>. We’ll occasionally send you account related emails.
          </small>
        </p>
      </div>
    );
  }
}
