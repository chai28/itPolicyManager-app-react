import * as React from 'react';
import {injectStripe, Elements, CardElement} from 'react-stripe-elements';

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

    this.handleSubscribed = this.handleSubscribed.bind(this);
    this.state = {
      name: "",
      amount: "",
    }

  document.documentElement.classList.remove("nav-open"); 
}
  handleSubscribed = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    console.log("subscribe test");
    try{
      // let token = this.props.stripe.createToken({name: this.state.name});
      // console.log(token);
      // You can also use handleCardPayment with the PaymentIntents API.
      // See our handleCardPayment documentation for more:
      // https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment
      // this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', {billing_details: {name: this.state.name}});
      // console.log(this.state.name);
    }catch(e){
      throw e;
    }
  };

  render() {
    return (
      <Elements>
        <form className="survey-form" onSubmit={this.handleSubscribed}>
           <FormGroup>
            <label >Name</label>
            <InputGroup className="form-group-no-border">
                <Input value={this.state.name} 
                  placeholder="Name" 
                  type="text" 
                  name="name"
                  onChange={(e) => this.setState({name: e.target.value})}
                />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <label >Amount</label>
            <InputGroup className="form-group-no-border">
                <Input 
                  value={this.state.amount} 
                  placeholder="0.00" 
                  type="text" 
                  name="amount"
                  onChange={(e) => this.setState({amount: e.target.value})}
                />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <label>
              Card details: CC Number -- Exp. Date -- CVC
            </label>
            <InputGroup className="form-group-no-border">
              <CardElement className="MyCardElement" />
            </InputGroup>
          </FormGroup>
          <button type="Submit" className="btn-round btn btn-success">Subscribed</button>
        </form>
      </Elements>
    );
  }
}

export default injectStripe(PaymentForm);