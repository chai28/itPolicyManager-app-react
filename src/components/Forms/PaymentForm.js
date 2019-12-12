import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import CardSection from 'views/commonPage/CardPayment.js';

class PaymentForm extends React.Component {
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // You can also use handleCardPayment with the PaymentIntents API.
    // See our handleCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment
    this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {billing_details: {name: 'Jenny Rosen'}});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(PaymentForm);