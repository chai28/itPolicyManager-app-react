import React from "react";

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
                            <Input type = "checkbox"/> 
                            <span>Micro Policy</span> 
                        </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                              <Input type = "checkbox"/> 
                              <span>DataPrivacy Poilicy</span> 
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                              <Input type = "checkbox"/> 
                              <span>Technology Usage Policy</span> 
                          </label>
                        </td>
                      </tr>
                    </tbody>
                    <tfooter>
                      <Button className="btn-round" color="success" style={{float:'right'}}>Purchase</Button>
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
