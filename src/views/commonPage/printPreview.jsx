import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
  } from "reactstrap";
import React, { Component, useState, useRef } from "react";
import Axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class printPreview extends Component {
  constructor(props){
    super(props);
    this.handlePrint = this.handlePrint.bind(this);
    this.renderPDF = this.renderPDF.bind(this);
    this.getDate = this.getDate.bind(this);
    this.state = {
      contents: [],
      tempcontents:[],
      policy:[],
      updatedContent:[]
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
              policy: response.data,
              contents: response.data.content,
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
      console.log("print clicked! ");
      console.log(this.state.policy);
     let input = document.getElementById("renderPDF");
      html2canvas(input)
       .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF();
        const pdf = new jsPDF('p', 'mm' ,[660,1500]);
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
         <p style={{fontFamily: 'Verdana', fontSize: 16}}>{'\t'}{content}</p>
        <br></br>
        </>
      );
    });
  }
 

 
 

 
    render() {
      return (
        <>
         <div className="content" id="policy">
            <Row>
             <Col className="ml-auto mr-auto" md="10">
                <h1>Preview</h1>
                <div id="renderPDF" >
                <p style={{fontFamily: 'Verdana', fontSize: 12}}>Company name: {localStorage.getItem("session_name")}</p>
                <p style={{fontFamily: 'Verdana', fontSize: 12}}>Subscribed Date: {this.state.policy.date_subscribed}</p>
                <p style={{fontFamily: 'Verdana', fontSize: 12}}>Version: {this.state.policy.version}</p>
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