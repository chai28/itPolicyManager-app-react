
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

class Policies extends React.Component {
  constructor(props){
    super(props);
    this.displayPolicies = this.displayPolicies.bind(this);
    this.state = {
      policies: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/policies", {
      params: {type: "all" }
    })
      .then(response => {
        this.setState({
          policies: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayPolicies(policies){
    return policies.map((policy, index) => {
      return (
        <tr>
          <td>{policy.policy_name}</td>
          <td className="text-center">
              <Button
                className="btn-round"
                outline
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="nc-icon nc-ruler-pencil" style={{fontSize: "15px", color: "info"}}/>
                Edit
              </Button>
              {" "}
              <Button
                className="btn-round"
                outline
                color="danger"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <i className="nc-icon nc-basket" style={{fontSize: "15px", color: "danger"}}/>
                Delete
              </Button>
          </td>
        </tr>
      );
    })
  }


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-upgrade" style={{ transform: "none" }}>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Policies</CardTitle>
                  <p className="card-category">
                    List of available policies in the system.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-center">Policy Name</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     {this.displayPolicies(this.state.policies)}
                    </tbody>
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

export default Policies;
