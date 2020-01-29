import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Button,
    Input,
    Row,
    Col,
    Table,
  } from "reactstrap";

  toast.configure();

  class ReviewPage extends React.Component {
    constructor(props){
        super(props);

        this.keyContactscheckboxHandler = this.keyContactscheckboxHandler.bind(this);
        this.renderDisplayReviewers = this.renderDisplayReviewers.bind(this);
        this.renderDisplayPolicyStatus = this.renderDisplayPolicyStatus.bind(this);
        this.startReviewButtonHandler = this.startReviewButtonHandler.bind(this);
        this.state = ({
          policyName: localStorage.getItem('reviewPolicy'),
          singlePolicy: [],
          isSelected: false,
          reviewerList: [],
          users: [],
        });
    }

    componentDidMount() {
        Axios.get("http://localhost:5000/company", {
          params: { _id: localStorage.getItem("session_id"), type: "user" }
        })
          .then(response => {
            console.log("companyID: " + response.data.company);
            Axios.get("http://localhost:5000/user", {
              params: { companyId: response.data.company }
            })
              .then(response => {
                this.setState({
                  users: response.data
                });
                Axios.get("http://localhost:5000/reviewPolicy", {
                    params: { company_name: localStorage.getItem("session_name"),
                        policy_name:  localStorage.getItem('reviewPolicy')
                }
                }).then(response => {
                    this.setState({
                        singlePolicy: response.data.singlePolicy
                    });
                })
                .catch(function(error) {
                    console.log(error);
                });
              })
              .catch(function(error) {
                console.log(error);
              });
          })
          .catch(function(error) {
            console.log(error);
          });
      }

      renderDisplayPolicyStatus(){
          let status
          // console.log("STATUS!!!" + this.state.singlePolicy.status);
          if(this.state.singlePolicy.status === "not reviewed"){
            status = "confirmation";
          }else if(this.state.singlePolicy.status === "confirmation"){
            status = "adoption";
          }else{
            status  = this.state.singlePolicy.status
          }
        return(
            <span className="text-primary">{status}</span>
        )
      }

      renderDisplayReviewers() {
        const displayReviewers = keyContact => {
          // console.log("keyContact.user_type ====>" + keyContact.user_type)
            if (keyContact.user_type === undefined) {
                return (
                    <tr key={keyContact._id}>
                        <td><Input
                            type="checkbox"
                            value={keyContact._id}
                            defaultChecked={this.state.isSelected}
                            onClick={this.keyContactscheckboxHandler}
                        />{keyContact.fname + " " + keyContact.lname}
                        </td>
                        <td>{keyContact.email}</td>
                        <td>{keyContact.position}</td>
                    </tr>
            );
          }
        };
    
        return this.state.users.map(function(keyContact, keyContactIndex) {
            console.log("keyContact" + keyContact.fname)
          return displayReviewers(keyContact);
        });
      }

    startReviewButtonHandler(e){
        e.preventDefault()
        console.log("#####" + this.state.singlePolicy.status);
        const data = {
            company_name: localStorage.getItem("session_name"),
            policyName: this.state.singlePolicy.name,
            status: this.state.singlePolicy.status,
            reviewerList: this.state.reviewerList,
        };
          Axios.post("http://localhost:5000/reviewPolicy", {data} ).then(
            res => {
              console.log(res.data);
              if (res.data.value === "success") {
                toast("You have successfully started the review for this policy", { 
                  type: "success", 
                  position: toast.POSITION.TOP_CENTER,
                  onClose: ()=> {
                    window.location.href = 'subscribed-policies'
                  }
                });
              } else {
                toast("Unsuccessful payment. Something went wrong, Try again", { 
                  type: "error",
                  position: toast.POSITION.TOP_CENTER,
                });
              }
            }
          );
           
        //implement set user_type
        //implement request for email notification for review
        //implement notification for start review/error
      }

      keyContactscheckboxHandler(e) {
        let reviewers = this.state.reviewerList;
        // console.log("his.state.isSelected: " + this.state.isSelected);
        if (e.target.checked) {
          reviewers.push(e.target.value);
        } else {
          for (let index = 0; index < reviewers.length; index++) {
            if (e.target.value === reviewers[index]) {
              reviewers = reviewers.splice(index, 1);
            }
          }
        }
        this.setState = {
            reviewerList: reviewers
        };
        //for testing
        console.log(this.state.reviewerList);
      }

      render() {
          return(
              <>
              <div className="content">
                <Row>
                    <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-upgrade" style={{ transform: "none" }}>
                        <CardHeader className="text-center">
                        <CardTitle tag="h4">
                            <span>Choose <strong>Key Contacts</strong> to start </span>
                            <span className="text-primary">{this.state.policyName}</span><br></br>
                            <span><strong>{this.renderDisplayPolicyStatus()} review.</strong></span>
                        </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Postion</th>
                                </tr>
                                </thead>
                                <tbody>{this.renderDisplayReviewers()}</tbody>
                            </Table>
                            <Button
                                className="btn-round"
                                color="success"
                                style={{ float: "right" }}
                                onClick={this.startReviewButtonHandler}
                            >
                                Start Review
                            </Button>
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