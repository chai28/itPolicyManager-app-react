/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, 
        Form, 
        Input, 
        InputGroupAddon,
        InputGroupText,
        InputGroup,
        Container, 
        Row, 
        Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ContactUsPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("register-page");
      return function cleanup() {
        document.body.classList.remove("register-page");
      };
});
  return (
    <>
      <ExamplesNavbar />
      <div style={{
          backgroundColor: "rgb(112, 62, 184, .5)",
          color: "white"
        }}
        className="section landing-section"
        >
        <Container>
        <Row>
            <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Get in touch?</h2>
            <Form className="contact-form">
                <Row>
                <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                    </InputGroup>
                </Col>
                <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" />
                    </InputGroup>
                </Col>
                </Row>
                <label>Message</label>
                <Input
                placeholder="Type in your queries to us..."
                type="textarea"
                rows="4"
                />
                <Row>
                <Col className="ml-auto mr-auto" md="4">
                    <Button className="btn-fill" color="success" size="lg">
                    Send Message
                    </Button>
                </Col>
                </Row>
            </Form>
            </Col>
        </Row>
        </Container>
    </div>
    <DemoFooter />
    </>
  );
}

export default ContactUsPage;





