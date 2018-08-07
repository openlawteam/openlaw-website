import React , { Component } from 'react';

import s from '../scss/modules/newsletterform.module.scss';

import { ArrowSVG } from './svg/ArrowSVG';
import { CheckSVG } from './svg/CheckSVG';
import TextInput from './common/TextInput';
import MailChimpData from '../config/mailChimp';

// MailChimp forms with JavaScript is not fun (React makes life a bit easier)
// Thank you for inspiration: https://stackoverflow.com/questions/28908100/submit-embedded-mailchimp-form-with-javascript-ajax-not-jquery

class NewsletterForm extends Component {
  state = { value: '' };

  formBotEmail = React.createRef();

  handleError = (errorText) => {
    this.setState({ mailChimpSubscribed: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.mailChimpSubscribed) return;
    if (this.formBotEmail.current.value) return;

    const form = event.target;
    const formAction = form.getAttribute('action');
    const { value } = this.state;

    const mailChimpCallbackHandler = ({ result, msg }) => {
      if (result === 'success') {
        __mailChimpStatus.success(); /* eslint-disable-line */
      }

      if (result === 'error') {
        __mailChimpStatus.error(); /* eslint-disable-line */
      }
    };

    const mailchimpCallback = `(${mailChimpCallbackHandler})`

    const mailChimpScriptElement = document.getElementById('mailchimp-script');
    const mailChimpCallbackScriptElement = document.getElementById('mailchimp-callback-script');

    if (mailChimpScriptElement && mailChimpCallbackScriptElement) {
      mailChimpScriptElement.remove();
      mailChimpCallbackScriptElement.remove();
    }

    // clear old event listeners
    document.removeEventListener('mailchimpSubscribeError', this.handleError, false);
    document.removeEventListener('mailchimpSubscribeOK', this.handleSuccess, false);

    // add new event listeners
    document.addEventListener('mailchimpSubscribeError', this.handleError, false);
    document.addEventListener('mailchimpSubscribeOK', this.handleSuccess, false);

    // run
    const mailChimpHandlerScript = document.createElement('script');
    mailChimpHandlerScript.type = 'text/javascript';
    mailChimpHandlerScript.id = 'mailchimp-callback-script';
    mailChimpHandlerScript.innerHTML = `
      // Create the event.
      var errorEvent = document.createEvent('Event');
      var successEvent = document.createEvent('Event');

      // Define that the event name is 'build'.
      errorEvent.initEvent('mailchimpSubscribeError', true, true);
      successEvent.initEvent('mailchimpSubscribeOK', true, true);

      var __mailChimpStatus = {
        error: function () {
          document.dispatchEvent(errorEvent)
        },
        success: function () {
          document.dispatchEvent(successEvent);
        },
      };
    `;

    // generate and run script
    const mailChimpScript = document.createElement('script');
    mailChimpScript.type = 'text/javascript';
    mailChimpScript.src = `${formAction}&c=${mailchimpCallback}&EMAIL='${value}`;
    mailChimpScript.id = 'mailchimp-script';

    // append script to head, and run
    document.getElementsByTagName('head')[0].appendChild(mailChimpHandlerScript);
    document.getElementsByTagName('head')[0].appendChild(mailChimpScript);
  };

  handleSuccess = () => {
    this.setState({ mailChimpSubscribed: true, value: '' });
  };

  onInputChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form action={MailChimpData.url} onSubmit={this.handleSubmit}>
        {/* mailchimp-specific */}
        <input type="hidden" name="u" value={MailChimpData.user} />
        <input type="hidden" name="id" value={MailChimpData.id} />

        {/* bot catcher */}
        <input
          autoComplete="nope"
          type="email"
          name="b_email"
          tabIndex="-1"
          defaultValue=""
          ref={this.formBotEmail}
          className={s.noGoodInput}
        />

        <TextInput
          autoCapitalize="off"
          autoComplete="off"
          disabled={this.state.mailChimpSubscribed}
          name="MERGE0"
          onChange={this.onInputChange}
          type="text"
          value={this.state.mailChimpSubscribed ? 'Fantastic!' : this.state.value}
        />

        {this.state.mailChimpSubscribed === false && (
          <small className={s.newsletterError}>That didn&rsquo;t work <span role="img" aria-label="sad face">&nbsp;😕</span>. Try again?</small>
        )}

        <button type="submit">
          {this.state.mailChimpSubscribed ? <CheckSVG data-icon-style="check" /> : <ArrowSVG />}
        </button>
      </form>
    );
  }
}

export default NewsletterForm;
