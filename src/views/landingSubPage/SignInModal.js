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
import React,{Component}from "react";
import {NavLink, Link} from "react-router-dom";
import Axios from "axios";

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

class SignInModal extends Component {
  constructor(props) {
      super(props);

      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSigninClick = this.onSigninClick.bind(this);
      this.toggleModal = this.toggleModal.bind(this);

      this.state = {
        usernameInput: '',
        passwordInput: '',
        modal: false
      }

    document.documentElement.classList.remove("nav-open"); 
  }

  componentDidMount() {
    document.body.classList.add("register-page");
  }

  componentDidUpdate() {
    document.body.classList.remove("register-page");
  }

  toggleModal (){
    this.setState({
      modal: !this.state.modal
    });
  };

  //button handler
  onSigninClick(e) {
    e.preventDefault();
    const signinDetails = {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    };
    
    Axios.post('http://localhost:5000/signin', signinDetails)
    .then(res => {console.log(res.data)});
  }

  onChangeInput(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
  }
    
render(){
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
                <Form className="register-form" onSubmit={this.onSigninClick}>
                  <label>User Name</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-circle-10" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="User Name" type="text" name="usernameInput"
                      onChange={this.onChangeInput}
                    />
                  </InputGroup>
                  <label>Password</label>
                  <InputGroup className="form-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="nc-icon nc-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" name="passwordInput"
                      onChange={this.onChangeInput}
                    />
                  </InputGroup>
                  <Button 
                    block 
                    className="btn-round" 
                    color="success" 
                    type="Submit"
                  >
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
                <NavLink
                  to="/register-modal" 
                  tag={Link}
                >
                  <Button
                    className="btn-round"
                    color="info"
                    title="to Register Modal"
                    outline
                    type="button"
                    name="modal"
                    onClick={this.toggleModal}
                  >
                    Not yet a Member?
                  </Button>
                </NavLink>
              {/* Modal */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="xl"
        >
            <div className="modal-header">
                <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={this.toggleModal}
                >
                <span aria-hidden={true}>×</span>
                </button>
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
                            <label><h5>Business Name</h5></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Name" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label><h5>New Zealand Business Number</h5></label>
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
                            <label><h5>Business Email</h5></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Email@email.com" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label><h5>Contact Number</h5></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="+64" type="number" />
                            </InputGroup>
                        </FormGroup>
                    </Col>
                    <Col md="6" className="modal-body-divider">
                        <FormGroup>
                            <label><h5>Address</h5></label>
                            <InputGroup className="form-group-no-border">
                                <Input placeholder="Address1" type="text" />
                            </InputGroup>
                        </FormGroup>
                        <FormGroup>
                            <label><h5>Address 2</h5></label>
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
                            <label><h5>Description of Business</h5></label>
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
                    onClick={this.toggleModal}
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
}

export default SignInModal;
