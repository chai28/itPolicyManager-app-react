import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

// reactstrap components
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class MatchedPolicies extends React.Component {
  constructor(props) {
    super(props);

    this.policy = this.policy.bind(this);
    this.subscribeBtn = this.subscribeBtn.bind(this)
    this.checkboxHandler = this.checkboxHandler.bind(this);

    this.state = {
      isSelected: false,
      matchedPolicies: [],
      policies: [],
      subscribedPolicies: []
    };
  }

  componentDidMount() {
    localStorage.removeItem('subscribedPolicies');
    Axios.get("http://localhost:5000/company", {
      params: { _id: localStorage.getItem("session_name"), type: "company" }
    })
      .then(response => {
        // console.log("response.data: " + response.data.match_policy);
        if(response.data.match_policy !== 0){
          console.log("here" + response.data.match_policy)
          this.setState({
            matchedPolicies: response.data.match_policy
          });
          this.getMatchedPolicy();
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getMatchedPolicy() {
    let requests = this.state.matchedPolicies.map(matchedPolicy =>
      Axios.get("http://localhost:5000/policies", {
        params: { _id: matchedPolicy, type: "one" }
      })
    );
    Promise.all(requests).then(policyData => {
      this.setState({ policies: policyData.map(x => x.data) });
    });
  }

  checkboxHandler(e) {
    let policyPurchase = this.state.subscribedPolicies;
    // console.log("his.state.isSelected: " + this.state.isSelected);
    if (e.target.checked) {
      policyPurchase.push(e.target.value);
    } else {
      console.log("policyPurchase: " + policyPurchase);
      for (let index = 0; index < policyPurchase.length; index++) {
        if (e.target.value === policyPurchase[index]) {
          policyPurchase = policyPurchase.splice(index, 1);
        }
      }
    }
    this.setState = {
      subscribedPolicies: policyPurchase
    };
    localStorage.setItem('subscribedPolicies', this.state.subscribedPolicies)
    //for testing
    // console.log(this.state.subscribedPolicies);
  }

  policy() {
    console.log( this.state.policies.length)
   
    if(this.state.policies.length === 0){
      return(
        <>
        <p className="text-center">
        You don't have any match Policies available</p>
        <p className="text-center">
          You can <a href="take-survey" style={{color: "blue"}}>
            TAKE A SURVEY</a> to get suggested policies
        </p>
        {/* work on the link and data */}
        </>
      )
    }else{
      return this.state.policies.map(policy => {
        return (
          <>
          <tbody>
            <tr key={policy._id}>
              <td key={policy._id + 1}>
                <label key={policy.policy_name}>
                  <Input
                    key={policy._id + 2}
                    type="checkbox"
                    value={policy._id}
                    defaultChecked={this.state.isSelected}
                    onClick={this.checkboxHandler}
                  />
                  {policy.policy_name}
                </label>
              </td>
            </tr>
            </tbody>
          </>
        );
      });
    }
  }

  subscribeBtn(){
    if(this.state.policies.length === 0){
      //button will not display.
    }else{
      return(
        <tfooter>
          <Button
            className="btn-round"
            color="success"
            style={{ float: "right" }}
            to={{
              pathname: "/subscription-payment",
              state: {
                test: 'testing',
              }
            }}
            title="to Survey Page"
            tag={Link}
          >
            Subscribe
          </Button>
        </tfooter>
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
                  <CardTitle tag="h4">Survey Result</CardTitle>
                  <p className="card-category">
                    List of suggested policy/s based on your survey result.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-center">Policy Name</th>
                      </tr>
                    </thead>
                    {this.policy()}
                    {this.subscribeBtn()}
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default MatchedPolicies;
