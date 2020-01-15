/*!

=========================================================
* Paper Dashboard React - v1.0
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
  Button
} from "reactstrap";

class Policies extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companyDetails: [],
      bNameInput: "",
      nzbnInput: "",
      bEmail: "",
      address: "",
      description: ""
    };
  }

  componentDidMount() {
    const idInfo = {
      user_id: localStorage.getItem("session_id")
    };
    console.log("ID: " + idInfo.user_id);
  
    Axios.get("http://localhost:5000/editprofile", {
      params: { _id: localStorage.getItem("session_id") }
    })
      .then(response => {
        console.log("response", response);
        this.setState({
          companyDetails: response.data.companyDetails
        });
        console.log("companyDetails", this.state.companyDetails);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

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
                    <Input
                      value={this.state.companyDetails.company_name}
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>New Zealand Business Number</h6>
                  </label>
                  <Row>
                    <InputGroup className="form-group-no-border">
                      <Col className="car-register-nzbn" lg="8">
                        <Input
                          value={this.state.companyDetails.nzbn}
                          type="text"
                        />
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
                    <Input
                      value={this.state.companyDetails.company_email}
                      type="text"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>Contact Number</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input 
                    // value={this.state.companyDetails.contact === undefined ? "add contact number" 
                    // :this.state.companyDetails.contact} 
                    type="number" />
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
                <Button
                  className="btn-round"
                  color="success"
                  style={{ float: "right" }}
                >
                  Save Changes
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Policies;
