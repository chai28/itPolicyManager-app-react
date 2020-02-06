import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

//import compnents
import QuestionForm from "components/Forms/QuestionForm.js";

class takeSurvey extends React.Component {
  constructor(props) {
    super(props);

    this.submitToDB = this.submitToDB.bind(this);
    this.state = {
      policies: []
    };
  }

  submitToDB() {
    const matchPolicies = [];
    this.state.policies.forEach(match => {
      if (match !== "5df2a662c550f92dd4c02274") {
        matchPolicies.push(match);
      }
    });
    const company = {
      name: localStorage.getItem("session_name"),
      policies: matchPolicies
    };
    Axios.post("http://localhost:5000/company", company)
      .then(response => {
        console.log("response", response);
        if (response.data.result === "success") {
            toast("Survey Submitted. We'll provide suggestion shortly.", {
              type: "success",
              position: toast.POSITION.TOP_CENTER,
              onClose: () => {
                window.location.href = "survey-result";
              }
            });
          } else {
            toast("Survey not submitted! Something went wrong.", {
              type: "error",
              position: toast.POSITION.TOP_CENTER,
              onClose: () => {
                window.location.reload();
              }
            });
          }
      })
      .catch(function(error) {
        console.log(error);
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
                  <CardTitle tag="h4">Survey</CardTitle>
                </CardHeader>
                <CardBody>
                  <QuestionForm
                    onPoliciesChange={policies =>
                      this.setState({ policies: policies })
                    }
                  />
                <Button className="btn-round" color="success" onClick={this.submitToDB}>
                    Submit
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

export default takeSurvey;
