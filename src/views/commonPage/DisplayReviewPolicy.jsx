import React from "react";
// import Axios from "axios";

// reactstrap components
import {
    Col,
    Form,
    FormGroup,
    InputGroup,
    Row,
    Input,
    Container
} from "reactstrap";

// core components
import NavbarPlain from "components/Navbars/navbarPlain.js";
import DemoFooter from "components/Footers/DemoFooter.js";


// import  styles from "assets/scss/paper-kit.scss";

class Policies extends React.Component {
    constructor(props){
        super(props);

        this.state = ({
            policyName: "",
            companyId: "",
            userId: "",
        });
    }

    async componentDidMount(){
        if(this.props.match.params){
            let pName = this.props.match.params.policyName.replace(/-/g," ");
            this.setState({
                policyName: pName,
                companyId: this.props.match.params.companyId,
                userId: this.props.match.params.userId
            })
        }
    }

    render(){
        return (
            <>
            <NavbarPlain />
            <div style={{
                backgroundColor: "ghostwhite",
                color: "dark grey"
                }}
                className="section landing-section">
            <Container>
            <Row>
                <Col className="ml-auto mr-auto">
                <h1 className="text-center">Policy Name</h1>
                <p>Polic Content</p>
                {/* <Form
                    className="edit-profile-form"
                    onSubmit={this.handleSaveProfile}
                >
                    <FormGroup>
                    <label>
                        <h6>Business Name</h6>
                    </label>
                    <InputGroup className="form-group-no-border">
                        <Input
                        value="#############"
                        name="bNameInput"
                        type="textarea"
                        row="80"
                        onChange={this.onChangeInput}
                        />
                    </InputGroup>
                    </FormGroup>
                    </Form> */}
                    </Col>
                </Row>
                </Container>
                </div>
            <DemoFooter />
            </>
        );
    }
}
export default Policies;