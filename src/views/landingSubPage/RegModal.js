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
import React, {Component} from "react";
import { NavLink, Link} from "react-router-dom";
import Axios from "axios";

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


class RegModal extends Component {
  constructor(props) {
      super(props);

      this.onChangeInput = this.onChangeInput.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.routeChange = this.routeChange.bind(this);
      this.toggleNotificationModal = this.toggleNotificationModal.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
      
      this.state = {
        modal: true,
        regNotification: false,
        bNameInput: '',
        nzbnInput: '',
        bEmail: '',
        bContact: '',
        bAddr: '',
        bAddr2: '',
        bCity: '',
        bState: '',
        bZip: '',
        bDescription: '',
        pop:'',
        pop2:'',
        message:'',
        messageHeader:''
      }

    document.documentElement.classList.remove("nav-open"); 
  }

  componentDidMount() {
    document.body.classList.add("register-page");
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }

  componentDidUpdate() {
    document.body.classList.remove("register-page");
  }

  routeChange() {
    let path = `/signin-page`;
    this.props.history.push(path);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true);
}

/**
 * close modal if clicked outside of element
 */
handleClickOutside(event) {
  if ((this.pop!==null?!this.pop.contains(event.target):false) 
    || (this.pop2!==undefined?!this.pop2.contains(event.target):false)) {
    this.routeChange();
  }
}

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleNotificationModal(){
    this.setState({
      regNotification: !this.state.regNotification
    });
  }

  //button handler
  onRegisterClick(e) {
    e.preventDefault();
    this.toggleModal();
    console.log("onRegisterClick clicked! ");
    const RegisterDetails = {
      bNameInput: this.state.bNameInput,
      nzbnInput: this.state.nzbnInput,
      bEmail: this.state.bEmail,
      bContact: this.state.bContact,
      bAddr: this.state.bAddr,
      bAddr2: this.state.bAddr2,
      bCity: this.state.bCity,
      bState: this.state.bState,
      bZip: this.state.bZip,
      bDescription: this.state.bDescription
    };
    
    Axios.post('http://localhost:5000/register', RegisterDetails)
    .then(res => {console.log(res.data);
      if(res.data.value === true){
        this.setState({
          message: "Please check your email for your login credentials and update you password.",
          messageHeader: "Thank You for registering"
        });
        
      }else{
        this.setState({
          message: "Company already exist, login instead.",
          messageHeader: "Registration Failed"
        });
      }
    });

    this.toggleNotificationModal();
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
                    <Input placeholder="User Name" type="text" name="usernameInput" autoComplete="username"
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
                    <Input placeholder="Password" type="password" name="passwordInput" autoComplete="current-password"
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
                  >
                    Not yet a Member?
                  </Button>
                </NavLink>
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
         {/* Modal */}
         <Container>   
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="xl">
            <div id='pop' ref={node=>{this.pop = node;}}>
              <div  className="modal-header">
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
                                  <Input placeholder="Name" type="text" name="bNameInput"
                                   onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>New Zealand Business Number</h6></label>
                              <Row>
                              <InputGroup className="form-group-no-border">
                                  <Col className="car-register-nzbn" lg="8">
                                      <Input placeholder="NZBN" type="text"  name="nzbnInput" 
                                      onChange={this.onChangeInput}/>
                                  </Col>
                                  <Col lg="4">
                                      <Input type="checkbox" value="nzbn"/>
                                  </Col>
                              </InputGroup>
                              </Row>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Business Email</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Email@email.com" type="text" 
                                  name="bEmail"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Contact Number</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="+64" type="number" 
                                  name="bContact"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                      </Col>
                      <Col md="6" className="modal-body-divider">
                          <FormGroup>
                              <label><h6>Address</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Address1" type="text" 
                                  name="bAddr"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Address 2</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Address2" type="text" 
                                  name="bAddr2"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <Row>
                                  <InputGroup className="form-group-no-border">
                                      <Col md="6">
                                          <label for="city">City</label>
                                          <Input type="text" id="city"
                                          name="bCity"
                                          onChange={this.onChangeInput}/>
                                      </Col>
                                      <Col md="4">
                                          <label for="state">State</label>
                                          <Input type="text" id="state"
                                          name="bState"
                                          onChange={this.onChangeInput}/>
                                      </Col>
                                      <Col md="2">
                                          <label for="zip">Zip</label>
                                          <Input type="text" id="zip"
                                          name="bZip"
                                          onChange={this.onChangeInput}/>
                                      </Col>
                                  </InputGroup>
                              </Row>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Description of Business</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input type='textarea' maxLength='500' id='description' rows={4} aria-multiline='true'
                                  name="bDescription"
                                  onChange={this.onChangeInput}/>
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
                      onClick={this.onRegisterClick}
                      to="/signin-page"
                  >
                      Register
                  </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button 
                      className="btn-link" 
                      color="danger" 
                      type="button"
                      modal={false}
                      onClick={this.routeChange}
                    >
                        Already a member?
                    </Button>
                  </div>
              </div>
              </div>
            </Modal>
          </Container>
          {/* modal for notification */}
          <Container>
            <Card className="ml-auto mr-auto">
              <Row>
                <Col className="ml-auto mr-auto" lg="4">
                  <Modal 
                    isOpen={this.state.regNotification}
                    toggle={this.toggleNotificationModal} 
                    size="l" 
                  >
                    <div id='pop2' ref={node=>{this.pop2 = node;}}>
                      <div className="modal-header">
                        <NavLink to="/signin-page" 
                            tag={Link}
                            aria-label="Close"
                            className="close"
                        >
                            <span aria-hidden={true}>×</span>
                        </NavLink>
                        <label><h6>{this.state.messageHeader}</h6></label>
                      </div>
                      <div className="modal-body">
                        <p>{this.state.message}</p>
                      </div>
                    </div>
                    </Modal>
                  </Col>
                </Row>
              </Card>
            </Container>
         
      </>
    );
  }
}

export default RegModal;
