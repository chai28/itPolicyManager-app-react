
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
    this.reviewButtonHandler = this.reviewButtonHandler.bind(this);
    this.tableDataDisplay = this.tableDataDisplay.bind(this);
    this.state = ({
      sub_policy: [],
      modal: false,
    });
  }

  componentDidMount() {
    localStorage.removeItem('reviewPolicy');
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

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    });
  };

  reviewButtonHandler(e) {
    localStorage.setItem('reviewPolicy', e.target.value)
    // console.log(localStorage.getItem('reviewPolicy')); //Testing
    this.props.history.push("subscribed-policy-action");
  }

  tableDataDisplay(){
    return this.state.sub_policy.map(policy => {
      // console.log("policies: " + policy);
      return (
        <>
          <tr key={policy._id}>
            <td key={policy.name}>{policy.name}</td>
            <td key={policy.status}>{policy.status}</td>
            <td key={policy._id} className="text-center">
              <Button className="btn-round"
                style={{'marginRight':'7px'}}
                color="success"
                value= {policy.name}
                onClick={this.reviewButtonHandler}>
                  View Details
              </Button>
            </td>
          </tr>
        </>
      )
    })
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
              this.tableDataDisplay()
            }
          </tbody>
        </Table>  
    )
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
                  {this.state.sub_policy.length !== 0 ? this.tableDisplay():<p>
                                <span style={{color: "red"}}>No Subscription yet!</span><br></br><br></br>
                                  You can subscribed to any IT policy you need by taking the survey and purchasing suggested policy/ies.
                  </p>}
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
