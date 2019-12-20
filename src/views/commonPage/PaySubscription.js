import React from 'react';
import {Elements} from 'react-stripe-elements';

// reactstrap components
import {
  Container,
} from "reactstrap";

// core components
import PaymentForm from 'components/Forms/PaymentForm';
import NavbarPlain from "components/Navbars/navbarPlain.js";
import DemoFooter from "components/Footers/DemoFooter.js";

class MySubscription extends React.Component {
  constructor(props) {
    super(props);
    document.documentElement.classList.remove("nav-open");
  }

  componentDidMount() {
    document.body.classList.add("register-page");
  }

  componentDidUpdate() {  
      document.body.classList.remove("register-page");
  }


  render() {
    return (
      <>
      <NavbarPlain />
        <Container>
          <div>
            <Elements>
              <PaymentForm />
            </Elements>
          </div>
        </Container>
      <DemoFooter />
      </>
    );
  }
}

export default MySubscription;