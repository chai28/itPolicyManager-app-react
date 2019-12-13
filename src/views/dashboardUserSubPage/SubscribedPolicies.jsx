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
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Policy Name</th>
                        <th>Status</th>
                        <th className="text-center">Action</th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Micro Policy</td>
                        <td>Confirmation</td>
                        <td className="text-center">
                          <Button className="btn-round"
                    style={{'marginRight':'7px'}}
                    color="success">Edit</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Data Privacy Policy</td>
                        <td>Not Yet Reviewed</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Button className="btn-round"
                    style={{'marginRight':'7px'}}
                    color="success">Start Process</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Technology Usage Policy</td>
                        <td>On Awareness</td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round"
                    style={{'marginRight':'7px'}}
                    color="success">Edit</Button>
                        </td>
                      </tr>
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

export default SubscribedPolicies;
