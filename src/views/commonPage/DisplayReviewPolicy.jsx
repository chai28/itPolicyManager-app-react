import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
    Col,
    Form,
    FormGroup,
    InputGroup,
    Row,
    Input,
    Container,
    Button
} from "reactstrap";

// core components
import NavbarPlain from "components/Navbars/navbarPlain.js";
import DemoFooter from "components/Footers/DemoFooter.js";

toast.configure();
// import  styles from "assets/scss/paper-kit.scss";

class Policies extends React.Component {
    constructor(props){
        super(props);
        this.commentHandler = this.commentHandler.bind(this);
        this.rejectHandler = this.rejectHandler.bind(this);
        this.acceptHandler = this.acceptHandler.bind(this);
        this.commentBtnHandler = this.commentBtnHandler.bind(this);
        this.processBtnReq = this.processBtnReq.bind(this);
        this.state = ({
            policy: [],
            company:[],
            commentInput: "",
            index: ""
        });
    }

    componentDidMount() {
        let pName = this.props.match.params.policyName.replace(/-/g," ");
        if(this.props.match.params){
            // console.log(pName)
            Axios.get("http://localhost:5000/clientReviewer", {
                params: { _id: this.props.match.params.companyId}
            }).then(response => {
                this.setState({
                    company: response.data
                })
                this.state.company.subscribed_policy.forEach((policy, index) => {
                    if(policy.name === pName){
                        this.setState({
                            policy: policy,
                            index: index
                        })
                    }
                })
            })
            .catch(function(error) {
            console.log(error);
            });
        
        }
    }

    commentHandler(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }

    rejectHandler() {
        Axios.get("http://localhost:5000/company", {
            params: { _id: this.props.match.params.userId, type: "user"}
        }).then(response => {
            const data = {
                fname: response.data.fname,
                lname: response.data.lname,
                policyName: this.props.match.params.policyName.replace(/-/g," "),
                companyId: this.props.match.params.companyId,
                userId: this.props.match.params.userId,
                review: "REJECTED",
                index: this.state.index
            }
            this.processBtnReq(data);
        })
    }

    processBtnReq(data) {
        if(data.review === "ACCEPTED"){
            Axios.post("http://localhost:5000/clientReviewer", data).then(response => {
                // console.log(response.data);
                console.log("status:", response.data.value);
                if (response.data.value === "success") {
                    toast("This policy has been accepted after review." +
                        "Initiator will received a notification about it.", { 
                    type: "success", 
                    position: toast.POSITION.TOP_CENTER,
                    onClose: ()=> {
                        window.location.href = '/landing-page'
                    }
                    });
                } else {
                    toast("There is an error sending your review feedback", { 
                        type: "error",
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            })
        }else if(data.review === "REJECTED"){
            Axios.post("http://localhost:5000/clientReviewer", data).then(response => {
                // console.log(response.data);
                console.log("status:", response.data.value);
                if (response.data.value === "success") {
                    toast("This policy has been rejected after review." +
                        "Initiator will received a notification about it.", { 
                    type: "success", 
                    position: toast.POSITION.TOP_CENTER,
                    onClose: ()=> {
                        window.location.href = '/landing-page'
                    }
                    });
                } else {
                    toast("There is an error sending your review feedback", { 
                        type: "error",
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            })
        }else{
            Axios.post("http://localhost:5000/clientReviewer", data).then(response => {
                // console.log(response.data);
                console.log("status:", response.data.value);
                if (response.data.value === "success") {
                    toast("Your review comment has been sent." + 
                        " Initiator will received a notification about your review comment.", { 
                    type: "success", 
                    position: toast.POSITION.TOP_CENTER,
                    onClose: ()=> {
                        window.location.href = '/landing-page'
                    }
                    });
                } else {
                    toast("There is an error sending your review feedback", { 
                        type: "error",
                        position: toast.POSITION.TOP_CENTER,
                    });
                }
            })
        }
    }

    acceptHandler() {
        Axios.get("http://localhost:5000/company", {
            params: { _id: this.props.match.params.userId, type: "user"}
        }).then(response => {
            const data = {
                fname: response.data.fname,
                lname: response.data.lname,
                policyName: this.props.match.params.policyName.replace(/-/g," "),
                companyId: this.props.match.params.companyId,
                userId: this.props.match.params.userId,
                review: "ACCEPTED",
                index: this.state.index
            }
            this.processBtnReq(data);
        })
    }

    commentBtnHandler() {
        Axios.get("http://localhost:5000/company", {
            params: { _id: this.props.match.params.userId, type: "user"}
        }).then(response => {
            const data = {
                fname: response.data.fname,
                lname: response.data.lname,
                policyName: this.props.match.params.policyName.replace(/-/g," "),
                companyId: this.props.match.params.companyId,
                userId: this.props.match.params.userId,
                review: "COMMENT",
                comment: this.state.commentInput
            }
            this.processBtnReq(data);
        })
    }

    render(){
        const policyContent = this.state.policy.content || []
        return (
            <>
            <NavbarPlain />
            <div style={{
                backgroundColor: "ghostwhite",
                color: "dark grey"
                }}
                className="section landing-section">
            <Container>
            <Row>
                <Col className="ml-auto mr-auto" md="12">
                    <h1 className="text-center">{this.state.policy.name}</h1>
                    {policyContent.map((content, index) => (
                        <><p key={index}>{content}</p><br></br></>
                    ))}
                </Col>
            </Row>
            <Form>
                <FormGroup>
                    <label>
                        <h6>Review Comment</h6>
                    </label>
                    <InputGroup className="form-group-no-border">
                        <Input
                        value={this.state.commentInput}
                        name="commentInput"
                        type="textarea"
                        rows="8"
                        onChange={this.commentHandler}
                        />
                    </InputGroup>  
                </FormGroup>
                <span style={{color: "red"}}>Note: </span>
                <span style={{fontSize: "12px"}}> Click Send Comment if you have comment.
                    Accept if Policy needs no changed and Reject if Policy can't be published.
                </span>
                <Button
                  className="btn-round"
                  color="danger"
                  style={{ float: "right" }}
                  onClick={this.rejectHandler}
                >
                  Reject
                </Button>
                <Button
                  className="btn-round"
                  color="success"
                  style={{ float: "right" }}
                  onClick={this.acceptHandler}
                >
                  Accept
                </Button>
                <Button
                  className="btn-round"
                  color="info"
                  style={{ float: "right" }}
                  onClick={this.commentBtnHandler}
                >
                  Send Comment
                </Button>
            </Form>
            </Container>
            </div>
            <DemoFooter />
            </>
        );
    }
}
export default Policies;