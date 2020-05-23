import React, { Component} from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
 

import {
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    Container
  } from "reactstrap";

  export default class Introduction extends Component {
      
    constructor(props){
      super(props);
      
      this.state = {
        animeIntroduction:[],
        animeintroduceImage:'',
        animeEpisodes:''
      };
  }
    componentDidMount() {
      Axios.get("http://localhost:4000/anime", {
        params: {animeName: localStorage.getItem('animeName')}
      })
        .then(response => {
          console.log(response)
          this.setState({
             animeIntroduction: response.data.animeIntroduction,
             animeintroduceImage: response.data.animeintroduceImage,
             animeEpisodes:response.data.animeintroduceImage
            });
             console.log(this.state.animeEpisodes);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    render() {
    
        return (
          <>
           {/* Navigation Bar */}
           <ExamplesNavbar />
           {/* Header */}
           <div
        style={{
          backgroundImage: "url(" + require("assets/img/introduction/kon.png") + ")"
        }}
        className="page-header"
        data-parallax={true}
        
      >
        <div className="filter" />
        <Container>
          <div className="motto text-left">
            <h1 >K-on!</h1>
            <br />
            <h5 className="description">
              Hirasawa Yui, a young, carefree girl entering high school, has her imagination instantly captured when she sees a poster advertising the "Light Music Club." 
              Being the carefree girl that she is, she quickly signs up; however, Yui has a problem, she is unable to play an instrument.
              </h5>
              <h5 className="description">
              When Yui goes to the clubroom to explain, she's greeted by the other members: Ritsu, Mio, and Tsumugi. 
              Although disheartened at Yui's lack of musical know-how, they still try to convince her to stay to prevent the club's disbandment. 
              After playing Yui a short piece which re-ignites her imagination, they succeed in keeping their new member and guitarist.
              </h5>
              <h5 className="description">
              Along with the tasks of school and homework, Yui begins to learn the guitar with the help of the other band members, experiencing many mishaps along the way. 
              However, with the school festival drawing near and Yui getting stuck with her practice, will the Light Music Club be ready in time for their debut?
              </h5>
              <br/>
              <Button
              className="btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              1
            </Button>
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
            >
              <i className="fa fa-play" />
              2
            </Button>
          </div>
        </Container>
      </div>
      <DemoFooter />
          </>
        );
      }

  }