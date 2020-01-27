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

export default class DisplayPolicyTest extends Component {
    constructor(props){
      super(props);
      this. renderContent = this. renderContent.bind(this);
      this.handleSaveContent = this.handleSaveContent.bind(this);
      this.handlePrint = this.handlePrint.bind(this);
      this.renderPDF = this.renderPDF.bind(this);
      this.getDate = this.getDate.bind(this);
      //this.getPDF = this.getPDF.bind(this);
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
//handle save button
    handleSaveContent(e) {
        e.preventDefault();
        console.log("Save clicked! ");
        const updatedContent = {
          updatedcontent: this.state.contents,
          company_name: localStorage.getItem("session_name"), 
          policy_name: localStorage.getItem('reviewPolicy')
        };
    
        Axios.post("http://localhost:5000/subscribedPolicy", updatedContent).then(
          res => {
            console.log(res.data);
          }
        );
      }


//handle print button
      handlePrint =(e) =>{
        e.preventDefault();
        console.log("print clicked! ");
        console.log(this.state.contents);
       let input = document.getElementById("renderPDF");
        html2canvas(input)
         .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          // const pdf = new jsPDF();
          const pdf = new jsPDF('p', 'mm');
          pdf.addImage(imgData, 'PNG', 0, 0,200,300);
          pdf.save( localStorage.getItem('reviewPolicy'));  
       });


     //puppeteer
    //  Axios.get("http://localhost:5000/pdfGeneration", {
    //         responseType: 'arraybuffer',
    //         headers: {
    //           'Accept': 'application/pdf'
    //         }
    //       }).then( 
    //         res => {
    //         const blob = new Blob([res.data], {type: 'application/pdf'})
    //         const link = document.createElement('a')
    //         link.href = window.URL.createObjectURL(blob)
    //         link.download = localStorage.getItem('reviewPolicy')
    //         link.click()
    //     }) .catch(function(error) {
    //       console.log(error);
    //   });
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
   

   
    renderContent (content,contentIndex){
        const onChangeInput = (e) => {
            console.log( "bbbb " +e.target.value)
            let content_temp = this.state.contents;
            content_temp[contentIndex]=e.target.value;
             this.setState({contents:content_temp});
        };
        return (
            <FormGroup>
              <InputGroup className="form-group-no-border">
                <Input
                  value={content}
                  type="textarea"
                  onChange={onChangeInput}
                  rows="12"
                  id= {contentIndex}
                  name={contentIndex}
                />
              </InputGroup>
             </FormGroup> 
        )
    }
      

    content() {
        return this.state.contents.map((content,contentIndex) => {
          return (
            <>
            {this.renderContent(content,contentIndex)}
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
                     <h3 className="text-center">{localStorage.getItem('reviewPolicy')}</h3>  
                      <Form className="edit-profile-form" id="content">
                        {this.content()}
                        <Button className="btn-round"
                                color="success"
                                style={{ float: "right" }}
                                type="submit"
                                onClick={this.handleSaveContent}>
                               Save  </Button>
                        <Button className="btn-round"
                                color="info"
                                style={{ float: "center" }}
                                type="submit"
                                onClick={this.handlePrint}>
                               Print
                            </Button>
                         </Form>   
                         <div id="renderPDF" >
                           <p style={{fontFamily: 'Verdana', fontSize: 12}}>{localStorage.getItem("session_name")}</p>
                           <p style={{fontFamily: 'Verdana', fontSize: 12}}>{this.getDate()}</p>
                           <h3 className="text-center">{localStorage.getItem('reviewPolicy')}</h3>
                           {this.renderPDF()}
                         </div>
                </Col>
              </Row>
            </div>
          </>
        );
      }
  }