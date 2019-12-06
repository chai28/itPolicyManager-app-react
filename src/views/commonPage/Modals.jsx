import React,{Component}from "react";
import {NavLink, Link} from "react-router-dom";
import Axios from "axios";

class Modals extends Component {
    constructor(props) {
        super(props);
  
        this.ToggleModal = this.ToggleModal.bind(this);
  
        state = {
            show: false
        };
    }

    showModal = (event) => {
        this.setState({
            show: true
        });
    };

    render(){
        return(
            <>

            </>
        );
    }
}

export default Modals;