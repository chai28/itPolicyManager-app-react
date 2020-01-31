
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
  Button
} from "reactstrap";

class Policies extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleSaveProfile = this.handleSaveProfile.bind(this);

    this.state = {
      companyDetails: [],
      bNameInput: "",
      nzbnInput: "",
      bEmail: "",
      bContact: "",
      bAddr: "",
      bDescription: "",
      bLogo :""
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
          companyDetails: response.data.companyDetails,
          bNameInput: response.data.companyDetails.company_name,
          nzbnInput: response.data.companyDetails.nzbn,
          bEmail: response.data.companyDetails.company_email,
          bContact: response.data.companyDetails.contact,
          bAddr: response.data.companyDetails.address,
          bDescription: response.data.companyDetails.description,
          bLogo : response.data.logo
        });
        console.log("companyDetails", this.state.companyDetails);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeInput(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  //Save button handler
  handleSaveProfile(e) {
    e.preventDefault();
    var realpath = "/busLogos"+document.getElementById('file_upl').files[0].name; 
    console.log("handleSaveProfile clicked! ");
    const companyDetails = {
      _id: this.state.companyDetails._id,
      company_name: this.state.bNameInput,
      nzbn: this.state.nzbnInput,
      company_email: this.state.bEmail,
      contact: this.state.bContact,
      address: this.state.bAddr,
      description: this.state.bDescription,
      logo : realpath
    };

    Axios.post("http://localhost:5000/editprofile", companyDetails).then(
      res => {
        if (res.data.status === "success") {
          toast("Save successfully", { 
            type: "success", 
            position: toast.POSITION.TOP_CENTER,
            onClose: ()=> {
              window.location.href = 'edit-profile'
            }
          });
        } else {
          toast("Unsuccessful save. Something went wrong, Try again", { 
            type: "error",
            position: toast.POSITION.TOP_CENTER,
          });
        }
        console.log(res.data);

      }
    );
  }

  render() {
    //Style
    const uploadStyle ={
      fontSize: "16px",
      borderRadius: "5px",
      borderStyle: "inherit",
      padding: "10px",
      backgroundColor: "white",
    };
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto">
              <Form
                className="edit-profile-form"
                onSubmit={this.handleSaveProfile}
              >
                <FormGroup>
                  <label>
                    <h6>Business Name</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input
                      value={this.state.bNameInput}
                      name="bNameInput"
                      type="text"
                      onChange={this.onChangeInput}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>New Zealand Business Number</h6>
                  </label>
                  <Row>
                    <InputGroup className="form-group-no-border">
                      <Col lg="4">
                        <Input
                          value={this.state.nzbnInput}
                          type="text"
                          name="nzbnInput"
                          onChange={this.onChangeInput}
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
                    <h6>Business Logo</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input
                      style={uploadStyle}
                      color="info"
                      id="file_upl"
                      type="file"
                      name="bLogo"
                      onChange={this.onChangeInput}
                    >
                      Upload Company Logo
                   </Input>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>Business Email</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input
                      value={this.state.bEmail}
                      type="text"
                      name="bEmail"
                      onChange={this.onChangeInput}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>Contact Number</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input
                      value={this.state.bContact}
                      placeholder="Add business contact number"
                      type="number"
                      name="bContact"
                      onChange={this.onChangeInput}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>Address</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input
                      placeholder="Add business address"
                      value={this.state.bAddr}
                      type="text"
                      name="bAddr"
                      onChange={this.onChangeInput}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <label>
                    <h6>Description of Business</h6>
                  </label>
                  <InputGroup className="form-group-no-border">
                    <Input
                      type="textarea"
                      maxLength="500"
                      name="bDescription"
                      placeholder="Add description of business"
                      value={this.state.bDescription}
                      onChange={this.onChangeInput}
                      rows={4}
                      aria-multiline="true"
                    />
                  </InputGroup>
                </FormGroup>
                <Button
                  className="btn-round"
                  color="success"
                  style={{ float: "right" }}
                  type="submit"
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
