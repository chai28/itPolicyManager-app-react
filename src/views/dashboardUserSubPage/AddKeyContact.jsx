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
                           <Input placeholder="First Name" type="text" />
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
                            <Input placeholder="Last Name" type="text" />
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
                          <Input placeholder="Email@email.com" type="text" />
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
                        <Input placeholder="Position" type="text" />
                       </Col> 
                      </InputGroup>
                      </Row>
                    </FormGroup>

                    <Button
                        className="btn-round"
                        style={{'margin-right':'20px'}}
                        color="success"
                        href="#"
                        onClick={e => e.preventDefault()}
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
