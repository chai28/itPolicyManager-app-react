import React from 'react';
import {Elements} from 'react-stripe-elements';

import PaymentForm from 'components/Forms/PaymentForm';

class MySubscription extends React.Component {
  render() {
    return (
      <Elements>
        <PaymentForm />
      </Elements>
    );
  }
}

export default MySubscription;