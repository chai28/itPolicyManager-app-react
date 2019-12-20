import React from 'react';
import {injectStripe, Elements, ReactStripeElements, CardElement} from 'react-stripe-elements';

// reactstrap components
import {
  Input,
  FormGroup, 
  InputGroup
} from "reactstrap";

import "assets/css/stripe.css";

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    }

  document.documentElement.classList.remove("nav-open"); 
}
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
      <Elements>
        <form className="survey-form" onSubmit={this.handleSubmit}>
           <FormGroup>
            <label >Name</label>
            <InputGroup className="form-group-no-border">
                <Input value={this.state.name} placeholder="Name" type="text" name="name"/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <label>
              Card details
            </label>
            <InputGroup className="form-group-no-border">
              <CardElement className="MyCardElement" />
            </InputGroup>
          </FormGroup>
          <button className="btn-round btn btn-success">Subscribed</button>
        </form>
      </Elements>
    );
  }
}

export default injectStripe(PaymentForm);