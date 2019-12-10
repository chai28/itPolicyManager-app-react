import React,{Component}from "react";
import Axios from "axios";


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
  
        this.onChangeInput = this.onChangeInput.bind(this);
        this.state = {
            navbarColor: "navbar-transparent",
            policies: [],
            bNameInput: '',
            nzbnInput: '',
            bEmail: '',
        }
  
      document.documentElement.classList.remove("nav-open"); 
    }

    componentDidMount() {
        document.body.classList.add("register-page");
    }

    componentDidUpdate() {
        document.body.classList.remove("register-page");
    }

    onChangeInput(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
    }

    submitToDB(){
        const matchPolicies = this.state.policies;

        const RegisterDetails = {
            bNameInput: this.state.bNameInput,
            nzbnInput: this.state.nzbnInput,
            bEmail: this.state.bEmail
        };

        Axios.post('http://localhost:5000/register', RegisterDetails)
        .then(res => {console.log(res.data);
            const company = {
                id: res.data.id,
                policies: matchPolicies,
            }
            Axios.post('http://localhost:5000/company', company)
            .then(response => {
                console.log('response', response)
            })
            .catch(function (error) {
                console.log(error);
            }) 
          if(res.data.value === true){
            this.setState({
              message: "Please check your email for your login credentials and update you password.",
              messageHeader: "Login for survey result"
            });
            
          }else{
            this.setState({
              message: "Company already exist, login instead.",
              messageHeader: "Login for survey result"
            });
          }
        });
        
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
                        <Input placeholder="Name" type="text" name="bNameInput"
                                   onChange={this.onChangeInput}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <label>New Zealand Buisness Number</label>
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
                    <label>Business Email</label>
                    <InputGroup className="form-group-no-border">
                        <Input placeholder="Email@email.com" type="text" 
                                  name="bEmail"
                                  onChange={this.onChangeInput}/>
                    </InputGroup>
                </FormGroup>
                <br></br>
                <QuestionForm 
                    onPoliciesChange={(policies) => this.setState({ policies: policies})}
                />

                <Button className="btn-round" color="success" onClick={this.submitToDB()}>
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