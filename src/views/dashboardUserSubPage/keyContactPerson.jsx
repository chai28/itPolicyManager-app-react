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

class keyContactPerson extends React.Component {
  constructor(props) {
    super(props);
    this.onAddClick = this.onAddClick.bind(this);
  }
  routeChange(path) {
    this.props.history.push(path);
  }

  onAddClick(e) {
    e.preventDefault();
    this.routeChange('AddKeyContacts');
    //window.location.reload();
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="10">
              <Card className="card-upgrade" style={{ transform: "none" }}>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Key Contact Person</CardTitle>
                  <p className="card-category">
                    List of key contact persons.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Postion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round" style={{'marginRight':'7px'}} color="success">Edit</Button>
                        </td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round" style={{'marginRight':'7px'}}  color="warning">Delete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round" style={{'marginRight':'7px'}} color="success">Edit</Button>
                        </td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round" style={{'marginRight':'7px'}}  color="warning">Delete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round" style={{'marginRight':'7px'}} color="success">Edit</Button>
                        </td>
                        <td className="text-center" style={{ width: "25%" }}>
                        <Button className="btn-round" style={{'marginRight':'7px'}}  color="warning">Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Button className="btn-round" style={{'marginRight':'7px'}} color="success"  onClick={this.onAddClick}>Add a new peron</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default keyContactPerson;

