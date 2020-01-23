import {
  Button,
    Row,
    Col
  } from "reactstrap";
import Axios from "axios";
import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import { Pagination } from 'antd';
// import { saveAs,FileSaver } from 'file-saver';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




export default class DisplayPolicies extends Component {
  constructor(props){
    super(props);
    this.state = ({
         PDF: [],
         numPages: null, pageNumber: 1
    });
}
  state = ({ numPages: null, pageNumber: 1 });

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  onChangePage=(page)=>{
    this.setState({ pageNumber:page });
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/reviewPolicy", {
      params: {company_name: localStorage.getItem("session_name"), policy_name: localStorage.getItem('reviewPolicy')}
    })
      .then(response => {
        console.log(response)
        var len = response.date.length;
        var bytes = new Uint8Array( len );
        for (var i = 0; i < len; i++){
            bytes[i] =response.data.charCodeAt(i);
        }
        this.setState({
            PDF: bytes.buffer
          });
          console.log(this.state.PDF);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
    
  render() {
    const { pageNumber, numPages } = this.state;
    return (
     <div className="content">
     <a href="\Assignment2.pdf" download="Assignment2.pdf">Download policy</a>
       <Row>
          <Col className="ml-auto mr-auto" md="20">
        <div style={{ width: 600 }}>
          <Document
            // file={this.state.PDF}
            file ="/Assignment2.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>
         </Col>
         <div>
          <Pagination
            // className={styles.pagination}
            showQuickJumper
            total={numPages}
            showTotal={total => `Total ${total} page`}
            current={pageNumber}
            pageSize={1}
            size='small'
            onChange={this.onChangePage}
         />
        </div>  
      </Row>
     </div>
    );
  }
}