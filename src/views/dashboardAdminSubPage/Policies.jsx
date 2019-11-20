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

class Policies extends React.Component {
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
                      <tr>
                        <td>Components</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>Login, Register, Pricing, Lock Pages</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          DataTables, VectorMap, SweetAlert, Wizard,
                          jQueryValidation, FullCalendar etc...
                        </td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>Mini Sidebar</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center" style={{ width: "25%" }}>
                          <Row>
                            <Button
                              className="btn-round"
                              style={{ "margin-right": "7px" }}
                              color="info"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Edit
                            </Button>
                            <Button
                              className="btn-round"
                              color="danger"
                              href="#pablo"
                              onClick={e => e.preventDefault()}
                            >
                              Delete
                            </Button>
                          </Row>
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

export default Policies;
