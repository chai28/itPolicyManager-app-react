
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
  Col,
  Modal,
} from "reactstrap";

class Subscribers extends React.Component {
  constructor(props) {
    super(props);

    this.getCompanyDetails = this.getCompanyDetails.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.displaySubscribers = this.displaySubscribers.bind(this);
    this.state = {
      companies: [],
      modal: false,
      company: []
    };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/company", {
      params: {type: "companyAll" }
    })
      .then(response => {
        this.setState({
          companies: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displaySubscribers() {
    return this.state.companies.map((company, index) => {
      let subscription
      // console.log(company.company_name)
      let name = company.company_name;
      let length = company.subscribed_policy.length
      if(length !== 0){
        subscription = <i className="nc-icon nc-check-2 text-success" />
      }else{
        subscription = <i className="nc-icon nc-simple-remove text-warning" />
      }
      if(company.company_name !== "IT_policy manager"){
        return (
            <tr key={index}>
              <td key={index + 1} className="text-center">{name}</td>
              <td key={index + 2} className="text-center">{subscription}</td>
              <td key={index + 3} className="text-center">
                  <Button
                      className="btn-round"
                      style={{'marginRight':'7px'}}
                      color="info"
                      href="#pablo"
                      onClick={this.getCompanyDetails}
                      title="to details Modal"
                      type="button"
                      value={name}
                  >
                      Details
                  </Button>
              </td>
            </tr>
        )
      }else {
        return(
          <>
          </>
        );
      }
    });
  }


  getCompanyDetails(e){
    e.preventDefault();
    console.log(e.target.value)
    Axios.get("http://localhost:5000/company", {
        params: { _id: e.target.value, type: "company" }
      }).then(response => {
        this.setState({
          modal: !this.state.modal,
          company: response.data
        });
      })
      console.log(this.state.company.company_name);
  }

  toggleModal(e){
    e.preventDefault();
      this.setState({
        modal: !this.state.modal,
      });
  };

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-upgrade" style={{transform: 'none'}}>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Subscribed Company</CardTitle>
                  <p className="card-category">
                    List of subscribed companies and subscription status
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th className="text-center">Company Name</th> 
                        <th className="text-center">Subscription Status</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.displaySubscribers()}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        {/* Modal Details */}
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="m">
          <div className="modal-header">
              <button
                aria-label="Close"
                className="close"
                type="button"
                onClick={this.toggleModal}
              >
                <span aria-hidden={true}>×</span>
              </button>
              <h5
                className="modal-title text-center"
              >
                {/* {this.state.company.company_name} details */}
              </h5>
            </div>
        </Modal>
      </>
    );
  }
}

export default Subscribers;
 