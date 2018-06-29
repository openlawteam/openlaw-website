import React, { Component } from 'react';

import TextInput from './common/TextInput';
import styles from '../css-modules/signup.module.css';

const SubmitButton = () => (
  <button type="submit">Sign up</button>
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
        <h2 className="color-white">Join OpenLaw</h2>

        <form>
          {this.renderInput('email', 'email@domain.com')}
          {this.renderInput('name', 'name')}
          {this.renderInput('password', 'password')}

          <SubmitButton />
        </form>
      </div>
    );
  }
}
