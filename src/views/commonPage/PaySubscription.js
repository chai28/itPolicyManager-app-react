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

//styles
import  styles from "assets/scss/paper-kit.scss";

class MySubscription extends React.Component {
  constructor(props) {
    super(props);
    document.documentElement.classList.remove("nav-open");
  }



  render() {
    return (
      <>
      <NavbarPlain />
      <div className={styles.main}>
      <div className="section text-center">
        <Container>
          <div>
            <Elements>
              <PaymentForm />
            </Elements>
          </div>
        </Container>
      </div>
      </div>
      <DemoFooter />
      </>
    );
  }
}

export default MySubscription;