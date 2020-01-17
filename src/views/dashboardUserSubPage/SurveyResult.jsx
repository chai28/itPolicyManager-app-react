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
<<<<<<< Updated upstream
  
=======
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const idInfo = {
      user_id: localStorage.getItem("session_id")
    };
    console.log("ID: " + idInfo.user_id);

    Axios.get("http://localhost:5000/surveyResult", {
      params: { companyName: localStorage.getItem("session_name") }
    })
      .then(response => {
        console.log("response", response);
        this.setState({
          match_policy: response.data.surveyResult
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
>>>>>>> Stashed changes
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
                    <tbody>
                      <tr>
                        <td>
                        <label>
                        {/* {this.state. match_policy.map(policy => (
                         <>
                           <Input type = "checkbox"/> 
                            <span>Micro Policy</span> 
                         </>
                         ))} */}
                        </label>
                        </td>
                      </tr>
                    </tbody>
                    <tfooter>
                      <Button 
                        className="btn-round" 
                        color="success" 
                        style={{float:'right'}}
                        to={{
                          pathname: "/subscription-payment"
                        }}
                        title="to Survey Page"
                        target="blank"
                        tag={Link}
                      >
                          Subscribe
                      </Button>
                    </tfooter>
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
