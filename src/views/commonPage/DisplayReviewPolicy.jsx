import React from "react";
// import Axios from "axios";

// reactstrap components
import {
    Container,
} from "reactstrap";

// core components
import NavbarPlain from "components/Navbars/navbarPlain.js";
import DemoFooter from "components/Footers/DemoFooter.js";

class Policies extends React.Component {

    async componentDidMount(){
        if(this.props.match.params){
            
        }
    }

    render(){
        return (
            <>
            <NavbarPlain />
            <div style={{
                backgroundColor: "rgb(112, 62, 184, .5)",
                color: "white"
                }}
                className="section landing-section"
                >
                <Container>
                <p>####### TEST ######</p>
                </Container>
            </div>
            <DemoFooter />
            </>
        );
    }
}
export default Policies;