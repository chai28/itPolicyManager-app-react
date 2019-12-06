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
} from "reactstrap";



class Policies extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onAddKeyContactClick = this.onAddKeyContactClick.bind(this);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      position: '',
      userId: localStorage.getItem('session_id')

    }
}
  
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
    .then(res => {console.log(res.data)});
  }

  render() {
    return (
      <>
      <div className="content">
          <Row>
          <Col className="ml-auto mr-auto" md="8">
        <Card className="card-upgrade" style={{transform: 'none'}}>
          <CardHeader className="text-center">
            <CardTitle tag="h4">Add key contacts for your company</CardTitle>
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
                        style={{'margin-right':'20px'}}
                        color="success"
                        href="#"
                        type="button"
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
      </>
    );
  }
}

export default Policies;
