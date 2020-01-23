import React from "react";
import { Link } from "react-router-dom";

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

          this.state = ({
            policyName: localStorage.getItem('reviewPolicy'),
          });
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
                        <p>Please choose an action below how to proceed.</p>
                        </CardHeader>
                        <CardBody>
                            <ul>
                                <li>
                                    <Button
                                        className="btn-round"
                                        color="neutral"
                                        style={{textDecoration: "underline", fontSize: "16px", fontWeight: "bold"}}
                                        to={{
                                            pathname: "policyDisplay"
                                        }}
                                        title="to Policy display page"
                                        tag={Link}>
                                            View {this.state.policyName} details
                                    </Button>
                                </li><br></br>
                                <li> 
                                    <Button
                                        className="btn-round"
                                        color="neutral"
                                        style={{textDecoration: "underline", fontSize: "16px", fontWeight: "bold"}}
                                        to={{
                                            pathname: "subscribed-policy-action-start-workflow"
                                        }}
                                        title="to review page"
                                        tag={Link}>
                                            Start Review Workflow
                                    </Button>
                                </li>
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