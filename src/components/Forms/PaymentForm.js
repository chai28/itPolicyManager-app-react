import * as React from 'react';
import {injectStripe, Elements, CardElement} from 'react-stripe-elements';

// reactstrap components
import {
  Input,
  FormGroup, 
  InputGroup,
  Row,
  Col,
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
        <Row>
            <Col lg="6">
              <div>
                <h1 style={{  marginTop: "120px", marginRight: "15px", fontSize: "16px"}}>
                  Subscription Summary
                </h1>
                <span className="fontStyle">Thank you for subscribing!</span><br></br><br></br>
                <span>Your card will be charge for an annual subscriboption to the service 
                  and you will be notified before your subscription ends for renewal 
                  to continue using the service.</span><br></br><br></br>
                <span className="TotalAmount">$100</span>
                <div className="flex-item width-fixed">
                  <span class="ProductSummaryTotalAmount-BillingInterval">
                    <div>annually</div>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="6">
                <form className="MyCardElement" style={{  marginTop: "120px"}}
                onSubmit={this.handleSubscribed}>
                <FormGroup>
                  <label >Email</label>
                  <InputGroup className="form-group-no-border">
                      <Input
                        value={this.state.name} 
                        placeholder="sample@email.com" 
                        type="email" 
                        name="email"
                        onChange={(e) => this.setState({name: e.target.value})}
                      />
                  </InputGroup>
                </FormGroup>
                {/* <FormGroup>
                  <label>
                    Card Information
                  </label>
                  <fieldset className="FormFieldGroup-Fieldset">
                      <div className="FormFieldGroup-container">
                        <div style={{width:"100%"}}>
                          <div className="FormFieldInput">
                            <span className="InputContainer" data-max>
                              <input class="CheckoutInput" 
                                autocomplete="cc-number" autocorrect="off" spellcheck="false" id="cardNumber" 
                                name="cardNumber" inputmode="numeric" aria-label="Card number" 
                                placeholder="1234 1234 1234 1234" aria-invalid="false" value=""/>
                            </span>
                          </div>
                          <div className="FormFieldInput-Icons " style={{opacity: "1" }}>
                              <div>
                                <span className="FormFieldInput-IconsIcon" is-Visible>
                                  <img src="https://js.stripe.com/v3/fingerprinted/img/visa-365725566f9578a9589553aa9296d178.svg" alt="visa" class="BrandIcon"/>
                                </span>
                              </div>
                              <div>
                                <span className="FormFieldInput-IconsIcon" is-Visible>
                                <img src="https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg" alt="mastercard" class="BrandIcon"/>
                                </span>
                              </div>
                              <div>
                                <span className="FormFieldInput-IconsIcon" is-Visible>
                                <img src="https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg" alt="amex" class="BrandIcon"/>
                                </span>
                              </div>
                            </div>   
                        </div>
                      </div>
                    </fieldset>
                </FormGroup> */}
                <FormGroup>
                  <label >Card Information</label>
                  <InputGroup className="form-group-no-border">
                    <CardElement className="MyCardElementTest form-control" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label >Name on card</label>
                  <InputGroup className="form-group-no-border">
                      <Input 
                        value={this.state.amount} 
                        placeholder="name" 
                        type="text" 
                        name="name"
                        onChange={(e) => this.setState({amount: e.target.value})}
                      />
                  </InputGroup>
                </FormGroup>
                <button type="Submit" className="btn-round btn btn-success btn-subscribe">Subscribed</button>
              </form>
            </Col>
        </Row>
      </Elements>
    );
  }
}

export default injectStripe(PaymentForm);