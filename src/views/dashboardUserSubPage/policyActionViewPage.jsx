import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Button,
    Row,
    Col,
  } from "reactstrap";


  class ReviewPage extends React.Component {
      constructor(props){
          super(props);
            this.renderPolicyDetails = this.renderPolicyDetails.bind(this);
            this.renderReviewDetails = this.renderReviewDetails.bind(this);
            this.displayStartWorkflowBtn = this.displayStartWorkflowBtn.bind(this);
            this.getPolicyData = this.getPolicyData.bind(this);
          this.state = ({
            policyName: localStorage.getItem('reviewPolicy'),
            companyDetails: [],
            reviewers:[],
          });
      }

     componentDidMount(){
        Axios.get("http://localhost:5000/company", {
            params: { _id: localStorage.getItem("session_name"), type: "company" }
          }).then(response => {
                this.setState({
                    companyDetails: response.data
                });
                Axios.get("http://localhost:5000/reviewPolicy", {
                    params: { company_name: localStorage.getItem("session_name"),
                        policy_name:  this.state.policyName}
                }).then(response => {
                    this.setState({
                        reviewers: response.data.singlePolicy.reviewer
                    })
                    this.getPolicyData();
                })
                .catch(function(error) {
                    console.log(error);
                });  
            })
            .catch(function(error) {
              console.log(error);
            });
      }

      getPolicyData(){
        let requests = this.state.reviewers.map(reviewer =>
            Axios.get("http://localhost:5000/company", {
                params: { _id: reviewer, type: "user" }
            })
          );
          Promise.all(requests).then(reviewerData => {
            this.setState({ reviewers: reviewerData.map(x => x.data) });
          });
      }

      renderReviewDetails(){  
        return this.state.reviewers.map(user => {
            console.log("this.state.reviewers ===>" + user)
            return(
                <span key={user._id}><strong> - {
                    user.fname + " " + user.lname}</strong>
                </span>
            )  
        }) 
      }

      displayStartWorkflowBtn(){
          console.log("this.state.reviewers.legnth" + this.state.reviewers.legnth)
          if(this.state.reviewers.length === 0){
           return(
                <li> 
                    <Button
                        className="btn-round"
                        color="primary"
                        style={{fontSize: "16px", fontWeight: "bold"}}
                        to={{
                            pathname: "subscribed-policy-action-start-workflow"
                        }}
                        title="to review page"
                        tag={Link}>
                            Start Review Workflow
                    </Button>
                </li>
            );
          }else{
            return(
                <><br></br>
                <span style={{color: "red"}}>
                    <strong>Please do follow-up the reviewers</strong>
                </span></>
            )
          }
      }

      renderPolicyDetails(){
        if(this.state.reviewers.length !== 0){
            return(
                <>
                    <p className="text-center">
                        Review is currently on-going for the list of reviewers below:</p>
                    <br></br>
                    <ul>
                        {this.renderReviewDetails()}
                    </ul>
                </>
            )
        }else{//review done/not yet started
            return(
                <p className="text-center danger" style={{color: "red", fontStyle: "italic"}}>
                    No workflow has started yet for the current stage of this policy. </p>
            )
        }
      }

      render(){
          return (
              <>
                <div className="content">
                <Row>
                    <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-upgrade" style={{ transform: "none" }}>
                        <CardHeader className="text-center">
                        <CardTitle tag="h4">{this.state.policyName}</CardTitle>
                        <p>See details and choose an action below how to proceed.</p>
                        </CardHeader>
                        <CardBody>
                            <blockquote className="blockquote">
                                {this.renderPolicyDetails()}
                            </blockquote>
                            <ul>
                                <li>
                                    <Button
                                        className="btn-round"
                                        color="info"
                                        style={{fontSize: "16px", fontWeight: "bold"}}
                                        to={{
                                            pathname: "DisplayPolicyTest"
                                        }}
                                        title="to Policy display page"
                                        tag={Link}>
                                            View {this.state.policyName}
                                    </Button>
                                </li>
                                {this.displayStartWorkflowBtn()}
                            </ul>
                            
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                </div>
              </>
          )
      }

  }
 export default ReviewPage;