import React,{Component}from "react";


// reactstrap components
import {
    Button,
    Form,
    FormGroup, 
    Input,
    InputGroup,
    Container,
    Row,
    Col,
  } from "reactstrap";
  
  // core components
  import IndexNavbar from "components/Navbars/IndexNavbar.js";
  import QuestionForm from "components/Forms/QuestionForm.js";
  import DemoFooter from "components/Footers/DemoFooter.js";

  class Survey extends Component {
    constructor(props) {
        super(props);
  
        // this.onChangeInput = this.onChangeInput.bind(this);
        // this.onSigninClick = this.onSigninClick.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
  
        this.state = {
            navbarColor: "navbar-transparent"
        }
  
      document.documentElement.classList.remove("nav-open"); 
    }

    componentDidMount() {
        document.body.classList.add("register-page");
    }

    componentDidUpdate() {
        document.body.classList.remove("register-page");
    }


    render(){
        return (
          <>
            <IndexNavbar />
            <Container>
            <div>
            <Form className="survey-form">
                <h2 className="mb-30 survey-title">
                    Survey Form
                </h2>
                <FormGroup>
                    <label >Business Name</label>
                    <InputGroup className="form-group-no-border">
                        <Input placeholder="Business Name" type="text" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <label>New Zealand Buisness Number</label>
                    <Row>
                        <InputGroup className="form-group-no-border">
                            <Col className="car-register-nzbn" lg="8">
                                <Input placeholder="NZBN" type="text" />
                            </Col>
                            <Col lg="4">
                                <Input type="checkbox" value="nzbn" 
                                name="nzbnInput"/>
                            </Col>
                        </InputGroup>
                    </Row>
                </FormGroup>
                <FormGroup>
                    <label>Business Email</label>
                    <InputGroup className="form-group-no-border">
                        <Input placeholder="Business_Email@email.com" type="text" 
                        name="bEmail"
                        onChange={this.onChangeInput}/>
                    </InputGroup>
                </FormGroup>
                <br></br>
                <QuestionForm />

                <Button className="btn-round" color="success">
                    Submit
                </Button>
            </Form>
            </div>
            </Container>
            <DemoFooter />
          </>
        );
    }
  }  

  export default Survey;