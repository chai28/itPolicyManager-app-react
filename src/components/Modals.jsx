
import React from "react";
import {NavLink} from "react-router-dom";

import {
    Modal,
    Card,
    Container,
    Row,
    Col,
} from "reactstrap";

const ModalSetup = (props) => {
    return (
    <>
        {/* modal for notification */}
        <Container>
        <Card className="ml-auto mr-auto">
        <Row>
            <Col className="ml-auto mr-auto" lg="4">
                <Modal 
                    size="l" 
                >
                    <div ref={node=>{this.pop = node;}}>
                    <div className="modal-header">
                        <NavLink 
                            onClick={props.close}
                            aria-label="Close"
                            className="close"
                        >
                            <span aria-hidden={true}>×</span>
                        </NavLink>
                    <label><h6>{this.props.messageHeader}</h6></label>
                    </div>
                    <div className="modal-body">
                        <p>{this.props.message}</p>
                    </div>
                    </div>
                </Modal>
            </Col>
            </Row>
            </Card>
        </Container>
    </>
    )
}

export default ModalSetup; 

// class Modals extends Component {

    // State = {
    //     pop: '',
    //     showmodal: false
    // };
    // toggleShowModal(e) {
    //     console.log("showmodal: " + this.state.showmodal)
    //     this.setState({
    //       showmodal: !this.state.showmodal
    //     })
    //   }

    // render() {
    //     if(!this.props.show){
    //         return null;
    //     }

    //   return <div>Hello Modal</div>;
    // }
    // constructor(props) {
    //     super(props);
  
    //     this.state = {
    //         pop: '',
    //         messageHeader: '',
    //         message: ''
    //     };

    //     document.addEventListener('mousedown', this.handleClickOutside, true);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('mousedown', this.handleClickOutside, true);
    // }

    // //close modal when clicked outside of element
    // handleClickOutside(event) {
    //     console.log("POP"+this.pop)
    //     if ((this.pop!==undefined?!this.pop.contains(event.target):false)) {
    //         this.props.show = false
    //         // this.setState({
    //         //     this.props.show: false
    //         // });
    //     }
    // }

//      render(){
//         return(
//             <>
//             {/* modal for notification */}
//             <Container>
//                 <Card className="ml-auto mr-auto">
//                 <Row>
//                     <Col className="ml-auto mr-auto" lg="4">
//                         <Modal 
//                             toggle={this.toggleShowModal} 
//                             size="l" 
//                         >
//                             <div ref={node=>{this.pop = node;}}>
//                             {this.modal()}
//                             </div>
//                         </Modal>
//                     </Col>
//                     </Row>
//                     </Card>
//                 </Container>
//             </>
//         );
//     }
// }

// export default Modals;