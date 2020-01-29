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
import { toast } from "react-toastify";

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

toast.configure({
  // autoClose: 8000,
  // draggable: false,
});

class keyContactPerson extends React.Component {
  constructor(props) {
    super(props);

    this.onAddClick = this.onAddClick.bind(this);
    this.renderKeyContacts = this.renderKeyContacts.bind(this);
    // this.onEditClick = this.onEditClick.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/company", {
      params: { _id: localStorage.getItem("session_id"), type: "user" }
    })
      .then(response => {
        console.log("user: " + response.data.company);
        Axios.get("http://localhost:5000/user", {
          params: { companyId: response.data.company }
        })
          .then(response => {
            this.setState({
              users: response.data
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  routeChange(path) {
    this.props.history.push(path);
  }

  onAddClick(e) {
    e.preventDefault();
    this.routeChange("AddKeyContacts");
    //window.location.reload();
  }

  onDeleteClick(userId) {
    console.log("delete clicked!");
    const keyContactDetails = {
      userId: userId,
      action: "delete"
    };

    Axios.post("http://localhost:5000/user", keyContactDetails).then(
      res => {
        console.log(res.data);
        console.log("Response Status:", res.data.status);
        if (res.data.status === "success") {
          toast("Deleted successfully", {
            type: "success",
            position: toast.POSITION.TOP_CENTER,
            onClose: ()=> {
              window.location.reload()
            }
          });
        } else {
          toast("Unable to delete", {
            type: "error",
            position: toast.POSITION.TOP_CENTER,
            onOpen: ()=> {
              window.location.reload()
            }
          });
        }
      }
    );
  }

  renderKeyContacts() {
    const displayKeyContacts = keyContact => {
      if (keyContact.user_type !== "comp_initiator") {
        return (
          <>
            <tr key={keyContact._id}>
              <td key={keyContact._id}>{keyContact.fname + " " + keyContact.lname}</td>
              <td key={keyContact._id}>{keyContact.email}</td>
              <td key={keyContact._id}>{keyContact.position}</td>
              {/* <td className="text-center" style={{ width: "25%" }}>
                <Button
                  className="btn-round"
                  style={{ marginRight: "7px" }}
                  color="success"
                  onClick={e => this.onEditClick(keyContact._id)}
                >
                  {" "}
                  Edit
                </Button>
              </td> */}
              <td key={keyContact._id} className="text-center" style={{ width: "25%" }}>
                <Button
                  className="btn-round"
                  style={{ marginRight: "7px" }}
                  color="warning"
                  onClick={e => this.onDeleteClick(keyContact._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </>
        );
      }
    };

    return this.state.users.map(function(keyContact, keyContactIndex) {
      return displayKeyContacts(keyContact);
    });
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
                  <p className="card-category">List of key contact persons.</p>
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
                    <tbody>{this.renderKeyContacts()}</tbody>
                  </Table>
                  <Button
                    className="btn-round"
                    style={{ marginRight: "7px" }}
                    color="success"
                    onClick={this.onAddClick}
                  >
                    Add a new peron
                  </Button>
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
