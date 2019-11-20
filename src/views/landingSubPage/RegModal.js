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
import {NavLink, Link} from "react-router-dom";


// react plugin used to create datetimepicker

// reactstrap components
import {
    Button,
    Modal,
    Card,
    Form,
    FormGroup, 
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegModal() {
  const [modal, setModal] = React.useState(true);
  const toggleModal = () => {
      setModal(!modal);
  }
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
        <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <Form className="register-form">
                  <label>User Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-circle-10" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="User Name" type="text" />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" />
                  </InputGroup>
                  <Button block className="btn-round" color="success">
                    Sign In
                  </Button><br></br>
                  <input type="checkbox" name="remember" value="rememberpassword" /> Remember Password 
                  <br></br>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
                <div className="col text-center">
                <Button
                className="btn-round"
                color="info"
                outline
                type="button"
                onClick={e => e.preventDefault()}
              >
                Not yet a Member?
              </Button>
              {/* Modal */}
        <Modal isOpen={modal} toggle = {toggleModal} size="xl"
        >
            <div className="modal-header">
                <NavLink to="/signin-page" 
                    tag={Link}
                    aria-label="Close"
                    className="close"
                >
                    <span aria-hidden={true}>×</span>
                </NavLink>
                <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                >
                <h4>Sign Up</h4>
                </h5>
            </div>
        <div className="modal-body">
            <Form className="register-form">
                <Row>
                    <Col md="6">
                        <FormGroup>
                            <label><h6>Business Name</h6></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Name" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label><h6>New Zealand Business Number</h6></label>
                            <Row>
                            <InputGroup className="form-group-no-border">
                                <Col className="car-register-nzbn" lg="8">
                                    <Input placeholder="NZBN" type="text" />
                                </Col>
                                <Col lg="4">
                                    <Input type="checkbox" name="nzbnValidation" value="nzbn" />
                                </Col>
                            </InputGroup>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <label><h6>Business Email</h6></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Email@email.com" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label><h6>Contact Number</h6></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="+64" type="number" />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col md="6" className="modal-body-divider">
                        <FormGroup>
                            <label><h6>Address</h6></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Address1" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label><h6>Address 2</h6></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Address2" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <InputGroup className="form-group-no-border">
                                    <Col md="6">
                                        <label for="city">City</label>
                                        <Input type="text" name="city" id="city"/>
                                    </Col>
                                    <Col md="4">
                                        <label for="state">State</label>
                                        <Input type="text" name="state" id="state"/>
                                    </Col>
                                    <Col md="2">
                                        <label for="zip">Zip</label>
                                        <Input type="text" name="zip" id="zip"/>
                                    </Col>
                                </InputGroup>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <label><h6>Description of Business</h6></label>
                            <InputGroup className="form-group-no-border">
                                <Input type='textarea' maxLength='500' name='description' id='description' rows={4} aria-multiline='true'/>
                            </InputGroup>
                        </FormGroup>
                        </Col>
                    </Row>
            </Form>
        </div>
            <div className="modal-footer">
                <div className="left-side">
                <Button
                    className="btn-link"
                    color="Info"
                    type="button"
                    onClick={e => e.preventDefault()}
                >
                    Register
                </Button>
                </div>
                <div className="divider" />
                <div className="right-side">
                <Button className="btn-link" color="danger" type="button">
                    Already a member?
                </Button>
                </div>
            </div>
              </Modal>
              </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, by IT Psychiatrist
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegModal;
