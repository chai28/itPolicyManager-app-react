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
  InputGroup
} from "reactstrap";

class Policies extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto">
              <Form className="edit-profile-form">
                    <FormGroup>
                      <label>
                        <h6>Business Name</h6>
                      </label>
                      <InputGroup className="form-group-no-border">
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>
                        <h6>New Zealand Business Number</h6>
                      </label>
                      <Row>
                        <InputGroup className="form-group-no-border">
                          <Col className="car-register-nzbn" lg="8">
                            <Input placeholder="NZBN" type="text" />
                          </Col>
                          <Col lg="4">
                            <Input
                              type="checkbox"
                              name="nzbnValidation"
                              value="nzbn"
                            />
                          </Col>
                        </InputGroup>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <label>
                        <h6>Business Email</h6>
                      </label>
                      <InputGroup className="form-group-no-border">
                        <Input placeholder="Email@email.com" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>
                        <h6>Contact Number</h6>
                      </label>
                      <InputGroup className="form-group-no-border">
                        <Input placeholder="+64" type="number" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>
                        <h6>Address</h6>
                      </label>
                      <InputGroup className="form-group-no-border">
                        <Input placeholder="Address1" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <label>
                        <h6>Address 2</h6>
                      </label>
                      <InputGroup className="form-group-no-border">
                        <Input placeholder="Address2" type="text" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <InputGroup className="form-group-no-border">
                          <Col md="6">
                            <label for="city">City</label>
                            <Input type="text" name="city" id="city" />
                          </Col>
                          <Col md="4">
                            <label for="state">State</label>
                            <Input type="text" name="state" id="state" />
                          </Col>
                          <Col md="2">
                            <label for="zip">Zip</label>
                            <Input type="text" name="zip" id="zip" />
                          </Col>
                        </InputGroup>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <label>
                        <h6>Description of Business</h6>
                      </label>
                      <InputGroup className="form-group-no-border">
                        <Input
                          type="textarea"
                          maxLength="500"
                          name="description"
                          id="description"
                          rows={4}
                          aria-multiline="true"
                        />
                      </InputGroup>
                    </FormGroup>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Policies;
