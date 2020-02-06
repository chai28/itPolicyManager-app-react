
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
  // Modal,
  // Container,
} from "reactstrap";

class AddKeyContacts extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAddKeyContactClick = this.onAddKeyContactClick.bind(this);

    this.state = {
      fname: '',
      lname: '',
      email: '',
      position: '',
      userId: localStorage.getItem('session_id'),
    }
}
/**** End of modal handler****/

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
      userId: this.state.userId,
      action: "add"
    };
    
    Axios.post('http://localhost:5000/user',addKeyContactDetails)
    .then(res => {console.log(res.data);
      if (res.data.status === "success") {
        toast("Save successfully", { 
          type: "success", 
          position: toast.POSITION.TOP_CENTER,
          onClose: ()=> {
            window.location.href = 'keyContactPerson'
          }
        });
      } else {
        toast("Unsuccessful save! the email may already exist", { 
          type: "error",
          position: toast.POSITION.TOP_CENTER,
          onClose: ()=> {
            window.location.reload()
          }
        });
      }
    });
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
                    Add New Contact
                  </Button>
                </Form> 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      </>
    );
  }
}

export default AddKeyContacts;
