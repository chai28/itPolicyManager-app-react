
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

    this.openModal = this.openModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.displaySubscribers = this.displaySubscribers.bind(this);
    this.displayDetails = this.displayDetails.bind(this);
    this.state = {
      companies: [],
      modal: false,
      index: "",
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
      // console.log(company._id)
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
              <td key={name} className="text-center">{name}</td>
              <td key={index + 2} className="text-center">{subscription}</td>
              <td key={index + 3} className="text-center">
                  <Button
                      className="btn-round"
                      style={{'marginRight':'7px'}}
                      color="info"
                      onClick={() => this.openModal(index)}
                      title="to details Modal"
                      type="button"
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


  openModal(index){
    this.setState({
      modal: !this.state.modal,
      index: index,
      company:this.state.companies[index] 
    });
    console.log(this.state.companies[index].company_name)
  }

  displayDetails() {
    console.log(this.state.company)
    return(
      <>
        <div className="modal-header">
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={this.toggleModal}
          >
            <span aria-hidden={true}>×</span>
          </button>
          <h5>{this.state.company.company_name}</h5>
        </div>
        <div className="modal-body">
          <label>
            <strong>NZBN:</strong> {this.state.company.nzbn}
          </label><br></br>
          <label>
            <strong>Email:</strong> {this.state.company.company_email}
          </label><br></br>
          <label>
            <strong>Date Registered:</strong> {this.state.company.date_registered}
          </label><br></br>
          <label>
            <strong>Address:</strong> {this.state.company.address}
          </label><br></br>
          <label>
            <strong>Contact #:</strong> {this.state.company.contact}
          </label><br></br>
          <label>
            <strong>Description:</strong> {this.state.company.description}
          </label><br></br>
        </div>
        <div className="modal-footer">
          <div>
            <Button
              className="btn-round"
              outline
              color="default"
              type="button"
            >
              <i className="nc-icon nc-ruler-pencil" style={{fontSize: "15px", color: "info"}}/>
              Edit
            </Button>
          </div>
          <div>
            <Button 
              className="btn-round" 
              outline
              color="danger" 
              type="button">
              <i className="nc-icon nc-basket" style={{fontSize: "15px", color: "danger"}}/>  
              Delete
            </Button>
          </div>
        </div>
      </>
    )
      
  }

  toggleModal(e){
    e.preventDefault();
      this.setState({
        modal: !this.state.modal,
        index: ""
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
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="m">
        {this.displayDetails()}
        </Modal>
      </>
    );
  }
}

export default Subscribers;
 