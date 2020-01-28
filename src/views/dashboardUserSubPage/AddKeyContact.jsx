/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
  Row,
  Col,
  Form,
  FormGroup, 
  Input,
  InputGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Modal,
  Container,
} from "reactstrap";

// import Modals from "components/Forms/QuestionForm.js";

class AddKeyContacts extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAddKeyContactClick = this.onAddKeyContactClick.bind(this);
    this.toggleNotificationModal = this.toggleNotificationModal.bind(this);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      position: '',
      userId: localStorage.getItem('session_id'),
      //temp modal
      Notification: false,
      pop:'',
      message:'',
      messageHeader:'',
      target:''

    }
}
  
//temp modal
  componentDidMount() {
    document.body.classList.add("register-page");
    //temp Modal
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }

  //temp Modal
componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true);
}

handleClickOutside(event) {
    if ((this.pop!==undefined?!this.pop.contains(event.target):false)) {
      this.setState({
        Notification: false
      });
    }
}

toggleNotificationModal(){
    this.setState({
      Notification: !this.state.Notification
    });

    console.log("Modal must display" + this.state.Notification)
}
/**** End of Temp Modal ****/

  onChangeInput(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      [name]: value
    });
  }

  onAddKeyContactClick(e) {
    e.preventDefault();
    console.log("add key contact clicked!");
    const addKeyContactDetails = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      position: this.state.position,
      userId: this.state.userId
    };
    
    Axios.post('http://localhost:5000/addKeyContact',addKeyContactDetails)
    .then(res => {console.log(res.data);
      if (res.data.status === "success") {
        toast("Save successfully", { 
          type: "success", 
          position: toast.POSITION.TOP_CENTER,
          onClose: ()=> {
            window.location.href = 'AddkeyContacts'
          }
        });
      } else {
        toast("Unsuccessful save. the email may already exist", { 
          type: "error",
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });
    // console.log("call the modal")
    // this.setState({
    //   Notification: true,
    // });
  }

  render() {
    return (
      <>
      <div className="content">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="card-upgrade" style={{transform: 'none'}}>
              <CardHeader className="text-center">
                <CardTitle tag="h4">Add key contact person</CardTitle>
              </CardHeader>
              <CardBody> 
                <Form className="edit-profile-form">
                  <FormGroup>
                    <label>
                      <h6>First Name</h6>
                    </label>
                    <Row>
                    <InputGroup className="form-group-no-border">
                        <Col className="car-register-nzbn" lg="12">
                          <Input placeholder="First Name" type="text" name="fname" 
                                  onChange={this.onChangeInput}/>
                      </Col>
                    </InputGroup>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <label>
                      <h6>Last Name</h6>
                    </label>
                    <Row>
                      <InputGroup className="form-group-no-border">
                        <Col className="car-register-nzbn" lg="12">
                          <Input placeholder="Last Name" type="text" name="lname"
                                  onChange={this.onChangeInput}/>
                        </Col>
                      </InputGroup>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <label>
                      <h6>Email</h6>
                    </label>
                    <Row>
                      <InputGroup className="form-group-no-border">
                      <Col className="car-register-nzbn" lg="12">
                        <Input placeholder="Email@email.com" type="text" name="email"
                                  onChange={this.onChangeInput} />
                      </Col>
                    </InputGroup>
                    </Row>
                  </FormGroup>

                  <FormGroup>
                    <label>
                      <h6>Position</h6>
                    </label>
                    <Row>
                    <InputGroup className="form-group-no-border">
                      <Col className="car-register-nzbn" lg="12">
                      <Input placeholder="Position" type="text" name="position"
                                  onChange={this.onChangeInput} />
                      </Col> 
                    </InputGroup>
                    </Row>
                  </FormGroup>
                  <Button
                    className="btn-round"
                    style={{'marginRight':'7px'}}
                    color="success"
                    href="#pablo"
                    onClick={this.onAddKeyContactClick}
                  >
                    Submit
                  </Button>
                </Form> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      {/* modal for notification Temporary*/}
      <Container>
            <Card className="ml-auto mr-auto">
              <Row>
                <Col className="ml-auto mr-auto" lg="4">
                  <Modal 
                    isOpen={this.state.Notification}
                    toggle={this.toggleNotificationModal} 
                    size="l" 
                    role="dialog" 
                  >
                    <div id='pop' ref={node=>{this.pop = node;}}>
                      <div className="modal-header">
                      <button
                        aria-label="Close"
                        className="close"
                        type="button"
                        onClick={this.toggleNotificationModal}
                      >
                        <span aria-hidden={true}>×</span>
                      </button>
                      <h5 className="modal-title text-center">{this.state.messageHeader}</h5>
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
      {/* <Modals onModalDisplay={(show, messageHeader, message) => this.setState({ 
          showmodal: show,
          messageHeader: messageHeader,
          message: message
      })}/> */}
      </>
    );
  }
}

export default AddKeyContacts;
