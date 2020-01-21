import * as React from "react";
import StripeCheckout from "react-stripe-checkout";
import { injectStripe, Elements /*CardElement*/ } from "react-stripe-elements";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import "assets/css/stripe.css";

toast.configure();

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: localStorage.getItem('session_name'),
      amount: 100.0, 
      policyList: []
    };

    this.handleSubscribed = this.handleSubscribed.bind(this);

    document.documentElement.classList.remove("nav-open");
  }

  componentDidMount() {
    const subscribedPolicies = localStorage.getItem('subscribedPolicies') || ''
    this.setState({policyList: subscribedPolicies.split(',')})
  }
  
  async handleSubscribed (token, addresses){
    console.log({ token, addresses });
    const product = {
      name: this.state.name,
      amount: this.state.amount,
      policies: this.state.policyList

    };
    const response = await Axios.post("http://localhost:5000/create_paymentintent", { token, product });
    
      console.log("Response:", response.data.status);
      if (response.data.status === "success") {
        toast("Payment successful! Check your email for details", { 
          type: "success", 
          position: toast.POSITION.TOP_CENTER,
          onClose: ()=> {
            window.location.href = '/landing-page'
          }
        });
      } else {
        toast("Unsuccessful payment. Something went wrong, Try again", { 
          type: "error",
          position: toast.POSITION.TOP_CENTER,
        });
      }
  };

  render() {
    return (
      <Elements>
        <Row>
          <Col lg="6">
            <div>
              <h1
                style={{
                  marginTop: "120px",
                  marginRight: "15px",
                  fontSize: "16px"
                }}
              >
                Subscription Summary
              </h1>
              <span className="fontStyle">Thank you for subscribing!</span>
              <br></br>
              <br></br>
              <span>
                Your card will be charge for an annual subscriboption to the
                service and you will be notified before your subscription ends
                for renewal to continue using the service.
              </span>
              <br></br>
              <br></br>
            </div>
          </Col>
          <Col lg="6">
            <h1
              style={{
                marginTop: "120px",
                marginRight: "15px",
                fontSize: "16px"
              }}
            >
              Payment Method
            </h1>
            <span>Total amount:</span>
            <br></br>
            <div className="flex-item width-fixed">
              <span className="TotalAmount">$100</span>
              <span class="ProductSummaryTotalAmount-BillingInterval">
                <sub>annually</sub>
              </span>
            </div>
            <br></br>
            <StripeCheckout
              stripeKey="pk_test_6KfHVFBMFj3g5bsKv6qIiXbV00zomUO8sV"
              token={this.handleSubscribed}
              amount={this.state.amount * 100}
              currency="NZD"
              name="Policy Subscription"
            >
              <button className="btn btn-primary">
                <span>Pay now</span>
              </button>
            </StripeCheckout>
          </Col>
        </Row>
      </Elements>
    );
  }
}

export default injectStripe(PaymentForm);
