import {
    Button,
    Row,
    Col,
  } from "reactstrap";
import React, { Component } from "react";
import Axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "assets/css/pdf.css";

export default class printPreview extends Component {
  constructor(props){
    super(props);
    this.handlePrint = this.handlePrint.bind(this);
    this.renderPDF = this.renderPDF.bind(this);
    this.getDate = this.getDate.bind(this);
    this.companyLogo = this.companyLogo.bind(this);
    this.state = {
      contents: [],
      tempcontents:[],
      policy:[],
      updatedContent:[],
      company:{}
    };
}
  componentDidMount() {
    console.log(localStorage.getItem("session_name"));
    Axios.get("http://localhost:5000/reviewPolicy", {
      params: {company_name: localStorage.getItem("session_name"), policy_name: localStorage.getItem('reviewPolicy')}
    })
      .then(response => {
        console.log(response)
        this.setState({
              company: response.data.company,
              policy: response.data.singlePolicy,
              contents: response.data.singlePolicy.content,
          });
          // console.log(this.state.contents);
      })
      .catch(function(error) {
        console.log(error);
      });
  }



//handle print button
    handlePrint =(e) =>{
      e.preventDefault();
      // console.log("print clicked! ");
      // console.log(this.state.policy);
     let input = document.getElementById("renderPDF");
      html2canvas(input)
       .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF();
        const pdf = new jsPDF('p', 'mm' ,[950,1700]);
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save( localStorage.getItem('reviewPolicy'));  
     });
  }

  getDate(){
    var tempDate = new Date();
    var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
    return date;
  }

  renderPDF(){
    return this.state.contents.map((content) => {
      return (
        <>
         <p className="pdfForm-control">{'\t'}{content}</p>
        <br></br>
        </>
      );
    });
  }
 
  companyLogo(){
    console.log("--->" +this.state.company.logo)
    if(this.state.company.logo === undefined){
      console.log("here" +this.state.company.logo )
      // const url = "./assets/busLogos/logo.jpg";
      return(
        <img className="img-fluid" 
          src="/busLogos/ITPM-02.png"
          alt="company logo"
          width="200px"
          height="100px"
          style={{float: "right"}}  
        />
      )
    }else{
      return(
        <img className="img-fluid" 
          src={this.state.company.logo} 
          alt="company logo"
          width="200px"
          height="100px"
          style={{float: "right"}}  
        />
      )
    }
  }
 
 
    render() {
      return (
        <>
         <div className="content" id="policy">
            <Row>
             <Col className="ml-auto mr-auto" md="10">
                <div id="renderPDF">
                  <Row>
                    <Col className="ml-auto mr-auto" md="5">
                      <div className="pdfForm-header" >
                        <p>{localStorage.getItem("session_name")}</p>
                        <p>Subscribed Date: {this.state.policy.date_subscribed}</p>
                        <p>Version: {this.state.policy.version}</p>
                      </div>
                    </Col>
                    <Col className="ml-auto mr-auto" md="5">
                    <img className="img-fluid" 
                      src={this.state.company.logo === undefined ? "/busLogos/ITPM-02.png":this.state.company.logo}
                      alt="company logo"
                      width="200px"
                      height="100px"
                      style={{float: "right"}}  
                    />
                    </Col>
                  </Row>
                <h3 className="text-center">{localStorage.getItem('reviewPolicy')}</h3>
                {this.renderPDF()}
                </div>
                <Button className="btn-round"
                    color="info"
                    style={{ float: "center" }}
                    type="submit"
                    onClick={this.handlePrint}>
                    Print
                </Button>
            </Col>
          </Row>
        </div>     
        </>
      );
    }
}