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
    Card,
    Modal,
  } from "reactstrap";
  
  // core components
  import IndexNavbar from "components/Navbars/IndexNavbar.js";
  import QuestionForm from "components/Forms/QuestionForm.js";
  import DemoFooter from "components/Footers/DemoFooter.js";

  class Survey extends Component {
    constructor(props) {
        super(props);
  
        this.submitToDB = this.submitToDB.bind(this);

        //temp Modal
        this.routeChange = this.routeChange.bind(this);
        this.toggleNotificationModal = this.toggleNotificationModal.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            navbarColor: "navbar-transparent",
            policies: [],
            bNameInput: '',
            nzbnInput: '',
            bEmail: '',
            Notification: false,
            pop:'',
            message:'',
            messageHeader:''

        }
  
      document.documentElement.classList.remove("nav-open"); 
    }

    componentDidMount() {
        document.body.classList.add("register-page");
        //temp Modal
        document.addEventListener('mousedown', this.handleClickOutside, true);
    }

    componentDidUpdate() {
        document.body.classList.remove("register-page");
    }

    submitToDB(){
        const matchPolicies = [];
        this.state.policies.forEach(match => {
          if(match !== "5df2a662c550f92dd4c02274"){
            matchPolicies.push(match);
          }
        })
        console.log(matchPolicies);
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
                status: "new"
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
              message: "To view your survey result please check your email for your login credentials and update you password.",
              messageHeader: "Login for survey result"
            });
            
          }else{
            this.setState({
              message: "Company already exist, login instead.",
              messageHeader: "Login for survey result"
            });
          }
        });
        console.log("call modal");
        this.setState({
            Notification: true,
            bNameInput: '',
            nzbnInput: '',
            bEmail: '',
        });
    }

    //temp Modal
    routeChange() {
        let path = `/signin-page`;
        this.props.history.push(path);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, true);
    }

    handleClickOutside(event) {
        if ((this.pop!==undefined?!this.pop.contains(event.target):false)) {
          this.routeChange();
        }
    }

    toggleNotificationModal(){
        
        this.setState({
          Notification: !this.state.Notification
        });
        
        console.log("Modal must display" + this.state.Notification)
    }


    render(){
        const updateInput = (e) => {
            e.preventDefault();
            const target = e.target;
            const value = target.value;
            const name = target.name;
            
            this.setState({
              [name]: value
            });
        };

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
                        <Input value={this.state.bNameInput} placeholder="Name" type="text" name="bNameInput"
                                   onChange={updateInput}/>
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <label>New Zealand Buisness Number</label>
                    <Row>
                        <InputGroup className="form-group-no-border">
                            <Col className="car-register-nzbn" lg="8">
                                <Input value={this.state.nzbnInput} placeholder="NZBN" type="text"  name="nzbnInput" 
                                      onChange={updateInput}/>
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
                        <Input value={this.state.bEmail} placeholder="Email@email.com" type="text" 
                                  name="bEmail"
                                  onChange={updateInput}/>
                    </InputGroup>
                </FormGroup>
                <br></br>
                <QuestionForm 
                    onPoliciesChange={(policies) => this.setState({ policies: policies})}
                />

                <Button className="btn-round" color="success" onClick={this.submitToDB}>
                    Submit
                </Button>
            </Form>
            </div>
            </Container>
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
            <DemoFooter />
          </>
        );
    }
  }  

  export default Survey;