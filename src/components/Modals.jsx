
import React from "react";
import {NavLink} from "react-router-dom";

import {
    Modal,
    Card,
    Container,
    Row,
    Col,
} from "reactstrap";

class Modals extends Component {
    constructor(props) {
        super(props);
        this.handleClickOutside = this.handleClickOutside.bind(this)
        this.state = {
            showmodal: false,
            messageHeader: '',
            message:''
        }
        document.addEventListener('mousedown', this.handleClickOutside, true);
    }

    componentDidMount() {
        const onModalDisplay = (show, messageHeader, message) => {

            this.setState({ 
                showmodal: show,
                messageHeader: messageHeader,
                message: message 
            });
            this.props.onModalDisplay(this.state.showmodal, this.state.message, this.state.messageHeader);
            console.log("componentDidMount: showmodal=> ", showmodal)
        }
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside, true);
    }

   //close modal when clicked outside of element
    handleClickOutside(event) {
        console.log("POP"+this.pop)
        if ((this.pop!==null?!this.pop.contains(event.target):false) 
            || (this.pop2!==undefined?!this.pop2.contains(event.target):false)) {
                let path = `/landing-page`;
                this.props.history.push(path);
        }
    };

    render() {
        //Closing Modal
        const toggleModal = () => {
            console.log("showmodal: " + this.state.showmodal)
            this.setState({
                showmodal: !this.state.showmodal
            })
        };

        return(
            <Container>
            <Card className="ml-auto mr-auto">
            <Row>
                <Col className="ml-auto mr-auto" lg="4">
                <Modal 
                    isOpen={this.state.showmodal}
                    toggle={toggleModal} 
                    size="l" 
                >
                    <div id='pop2' ref={node=>{this.pop2 = node;}}>
                    <div className="modal-header">
                        <Button 
                            aria-label="Close"
                            className="close"
                            onClick={toggleModal}
                        >
                            <span aria-hidden={true}>×</span>
                        </Button>
                        <label><h6>{this.state.messageHeader}</h6></label>
                    </div>
                    <div className="modal-body">
                        <p>{this.state.message}</p>
                    </div>
                    </div>
                    </Modal>
                </Col>
                </Row>
            </Card>
            </Container>
        );
    }
}

export default Modals;