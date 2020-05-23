
import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";


// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// styles
import "assets/css/bootstrap.min.css";
import  styles from "assets/scss/paper-kit.scss";

//images
import kon from "assets/img/covers/kon.jpg";
import liz from "assets/img/covers/Liz_and_the_Blue_Bird.jpg";
import prpr from "assets/img/covers/prpr.jpg";
import yurucamp from "assets/img/covers/Yurucamp.jpg";
import Starlight from "assets/img/covers/starlight1.jpg";
import Revolution from "assets/img/covers/revolution.jpg";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.animeReviewHandler = this.animeReviewHandler.bind(this);
    this.state = ({
      anime:[]
    });
  }

  // componentDidMount() {
  //   localStorage.removeItem('animeName');
  //   // console.log("ID: " + localStorage.getItem("session_id"));
  //   Axios.get("http://localhost:4000/anime", )
  //     .then(response => {
  //       // console.log("response", response);
  //       this.setState({
  //         anime: response.data
  //       });
  //       // console.log(this.state.sub_policy);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  animeReviewHandler(e) {
    localStorage.setItem('animeName', "K-on!")
    console.log(localStorage.getItem('animeName'));
    this.props.history.push("introduction");
  }

  render() {
    // document.documentElement.classList.remove("nav-open");
    // React.useEffect(() => {
    //   document.body.classList.add("profile-page");
    //   return function cleanup() {
    //     document.body.classList.remove("profile-page");
    //   };
    // });
    return (
      <>
        {/* Navigation Bar */}
        <ExamplesNavbar />
        {/* Header */}
        <LandingPageHeader />
        <div className={styles.main}>
          {/* Product Part */}
          <div className="section text-center"> 
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Let's yuri yuri</h2>
                  <br />
                  {/* <Button
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    See Details
                  </Button> */}
                </Col>
              </Row>
              <br />
              <br />
              <Row>
                <Col md="4">
                  <div className="info">
                    <div className="description">
                     <Link  
                    // to={{pathname: "/introduction" }} 
                     onClick={this.animeReviewHandler}
                     >
                      <img src={kon} alt="..." width="240px"
                         height="320px"/>
                      <h4 className="info-title">K-on!</h4>
                     </Link> 
                      {/* <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button> */}
                   </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="description">
                      <img src={liz} alt="..." width="240px"
                        height="320px"/>
                      <h4 className="info-title"> Liz and the Blue Bird</h4>
                      {/* <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button> */}
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="description">
                      <img src={prpr} alt="..." width="240px"
                        height="320px"/>
                      <h4 className="info-title">Princess principal</h4>
                      {/* <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button> */}
                    </div>
                  </div>
                </Col>
                <br />
                <Col md="4">
                  <div className="info">
                    <div className="description">
                    <img src={yurucamp} alt="..." width="240px"
                        height="320px"/>
                      <h4 className="info-title">Yuru camp</h4>
                      {/* <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button> */}
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="description">
                    <img src={Starlight} alt="..." width="240px"
                        height="320px"/>
                      <h4 className="info-title">Shōjo Kageki Revue Starlight</h4>
                      {/* <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button> */}
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info">
                    <div className="description">
                    <img src={Revolution} alt="..." width="240px"
                        height="320px"/>
                      <h4 className="info-title">Revolutionary Girl Utena</h4>
                      {/* <Button className="btn-link" color="info" href="#pablo">
                        See more
                      </Button> */}
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* Take a Survey */}
          {/* <div className="section section-light-blue text-center">
            <Container>
              <h2 className="title">Take A free Survey</h2>
              <h3>
                Take our free survey and will recommend you the policy you need.
              </h3>
              <br></br><br></br>
              <Button 
                className="btn-fill" 
                color="danger" 
                size="lg"
                to={{
                  pathname: "/survey-page"
                }}
                title="to Survey Page"
                tag={Link}>
                        START SURVEY
              </Button>
            </Container>
          </div> */}
          {/* Contact Us Area */}
          {/* <div className="section landing-section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="text-center">Keep in touch?</h2>
                  <Form className="contact-form">
                    <Row>
                      <Col md="6">
                        <label>Name</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Name" type="text" />
                        </InputGroup>
                      </Col>
                      <Col md="6">
                        <label>Email</label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="nc-icon nc-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input placeholder="Email" type="text" />
                        </InputGroup>
                      </Col>
                    </Row>
                    <label>Message</label>
                    <Input
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="4"
                    />
                    <Row>
                      <Col className="ml-auto mr-auto" md="4">
                        <Button className="btn-fill" color="danger" size="lg">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Container>
          </div> */}
        </div>
        <DemoFooter />
      </>
    );
  }
}

export default LandingPage;
