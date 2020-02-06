
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// styles
import "assets/css/bootstrap.min.css";
import  styles from "assets/scss/paper-kit.scss";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      {/* Navigation Bar */}
      <ExamplesNavbar />
      {/* Header */}
      <LandingPageHeader />
      <div className={styles.main}>
        {/* Product Part */}
        <div className="section text-center"> 
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  This is the paragraph where you can write more details about
                  your product. Keep you user engaged by providing meaningful
                  information. Remember that by this time, the user is curious,
                  otherwise he wouldn't scroll to get here. Add a button if you
                  want the user to see more.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  See Details
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-single-copy-04" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Create Policy</h4>
                    <p className="description">
                      Create a customized IT Policy based on your company's needs. 
                      No idea what policy you need? Answer a set of questions and we'll match policies that you may need.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-zoom-split" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Have it Reviewed</h4>
                    <p>
                      Add key contacts and have them review the Policy generated.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Awareness</h4>
                    <p>
                      Have your employees bring the policy into action by taking policy related assessment.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Reporting</h4>
                    <p>
                      See and moniutor your policies with reports of subscribed policies 
                      and employees participation in awareness.
                    </p>
                    {/* <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Take a Survey */}
        <div className="section section-brown text-center">
          <Container>
            <h2 className="title">Take A free Survey</h2>
            <h3>
              Take our free survey and will recommend you the policy you need.
            </h3>
            <br></br><br></br>
            <Button 
              className="btn-fill" 
              color="danger" 
              size="lg"
              to={{
                pathname: "/survey-page"
              }}
              title="to Survey Page"
              tag={Link}>
                      START SURVEY
            </Button>
          </Container>
        </div>
        {/* Contact Us Area */}
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
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
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
