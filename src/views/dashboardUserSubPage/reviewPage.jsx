import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
    NavLink
  } from "reactstrap";


  class ReviewPage extends React.Component {
      constructor(props){
          super(props);
          this.state = ({
            policy: localStorage.getItem('reviewPolicy'),
            keyContacts: []
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
                        <CardTitle tag="h4">{this.state.policy}</CardTitle>
                        <p>Please choose an option below for the {this.state.policy}.</p>
                        </CardHeader>
                        <CardBody>
                            <ul>
                                <li>
                                <Button
                                      className="btn-round"
                                      color="neutral"
                                      style={{textDecoration: "underline", fontSize: "16px", fontWeight: "bold"}}
                                      to={{
                                           pathname: "DisplayPolicies"
                                         }}
                                    title="to Policy display page"
                                   tag={Link}>
                                   View {this.state.policy} details
                                </Button>
                                </li><br></br>
                                <li> 
                                    <Link
                                        style={{textDecoration: "underline", fontSize: "16px", fontWeight: "bold"}}
                                        to={{
                                            pathname: "/policyDisplay",
                                            state: {modal: true}

                                        }}
                                        title="to Register Modal"
                                        tag={Link}>
                                            Start Workflow
                                    </Link>
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