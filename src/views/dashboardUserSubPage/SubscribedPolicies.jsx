/*!

=========================================================
* Paper Dashboard React - v1.1.0
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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class SubscribedPolicies extends React.Component {
  constructor(props){
    super(props);
    this.tableDisplay = this.tableDisplay.bind(this);
    this.displayPage = this.displayPage.bind(this);
    this.state = ({
      sub_policy: []
    });
  }

  componentDidMount() {
    const idInfo = {
      user_id: localStorage.getItem("session_id")
    };
    console.log("ID: " + idInfo.user_id);

    Axios.get("http://localhost:5000/subscribedPolicy", {
      params: { company_name: localStorage.getItem("session_name") }
    })
      .then(response => {
        // console.log("response", response);
        this.setState({
          sub_policy: response.data
        });
        console.log(this.state.sub_policy);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  tableDisplay(){
    return(
        <Table responsive>
          <thead>
            <tr>
              <th>Policy Name</th>
              <th>Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.sub_policy.map(function(policy, policyIndex){
                console.log("policies: " + policy);
                let buttonValue
                if(policy.status === "not reviewed"){
                  buttonValue = "Start Review";
                }else if(policy.status !== "not reviewed"){
                  buttonValue = "Edit Workflow";
                }
                return (
                  <>
                    <tr key={policyIndex}>
                      <td>{policy.name}</td>
                      <td>{policy.status}</td>
                      <td className="text-center">
                        <Button className="btn-round"
                          style={{'marginRight':'7px'}}
                          color="success">
                            {buttonValue}
                        </Button>
                      </td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </Table>  
    )
  }

  displayPage(){
    if(this.state.sub_policy.length !== 0){
      return (this.tableDisplay());
    }else{
      return(
        <p>
          <span style={{color: "red"}}>No Subscription yet!</span><br></br><br></br>
          You can subscribed to any IT policy you need by taking the survey and purchasing suggested policy/ies.
        </p>
      )
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card className="card-upgrade" style={{ transform: "none" }}>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Subscribed Policies</CardTitle>
                  <p className="card-category">
                    List of your subscribed policies and its status.
                  </p>
                </CardHeader>
                <CardBody>
                  {this.displayPage()}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SubscribedPolicies;
