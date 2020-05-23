import React, { Component} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";

import {
      Button,
      Row,
      Col,
      Form,
      FormGroup,
      Input,
      InputGroup,
    } from "reactstrap";

export default class DisplayPolicyTest extends Component {
    constructor(props){
      super(props);
      this.renderContent = this.renderContent.bind(this);
      this.handleSaveContent = this.handleSaveContent.bind(this);
      // this.handlePrint = this.handlePrint.bind(this);
      // this.renderPDF = this.renderPDF.bind(this);
      // this.getDate = this.getDate.bind(this);
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
        params: {animeName: localStorage.getItem("session_name")}
      })
        .then(response => {
          console.log(response)
          this.setState({
                policy: response.data.singlePolicy,
              contents: response.data.singlePolicy.content,
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
            if (res.data.status === "success") {
              toast("Save successfully", { 
                type: "success", 
                position: toast.POSITION.TOP_CENTER,
                onClose: ()=> {
                  window.location.href = 'DisplayPolicyTest'
                }
              });
            } else {
              toast("Unsuccessful save. Something went wrong, Try again", { 
                type: "error",
                position: toast.POSITION.TOP_CENTER,
              });
            }
          }
        );
      }


    renderContent (content,contentIndex){
        const onChangeInput = (e) => {
            // console.log( "bbbb " +e.target.value)
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
                                to={{
                                        pathname: "printPreview"
                                        }}
                                title="to print preview page"
                                tag={Link}>
                               Preview
                            </Button>
                         </Form>   
                         {/* <div id="renderPDF" >
                           <p style={{fontFamily: 'Verdana', fontSize: 12}}>{localStorage.getItem("session_name")}</p>
                           <p style={{fontFamily: 'Verdana', fontSize: 12}}>{this.getDate()}</p>
                           <h3 className="text-center">{localStorage.getItem('reviewPolicy')}</h3>
                           {this.renderPDF()}
                         </div> */}
                </Col>
              </Row>
            </div>
          </>
        );
      }
  }