import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
  Row,
  Col,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle
} from "reactstrap";

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.renderOption = this.renderOption.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.state = {
      questions: [],
      policies: [],
    };

    document.documentElement.classList.remove("nav-open");
  }

  componentDidMount() {
    document.body.classList.add("register-page");
    Axios.get("http://localhost:5000/questions")
      .then(response => {
        console.log("response", response);
        this.setState({
          questions: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    Axios.get('http://localhost:5000/policies')
    .then(response => {
        console.log('response', response)
        this.setState({
            policies: response.data
        });
    })
    .catch(function (error) {
        console.log(error);
    })
  }
  
  onSaveClick(e) {
    e.preventDefault();
    // this.toggleModal();
    console.log("onSaveClick clicked! ");
    const questionDetails = {
      questionInputs: this.state.questions
    };
    
    Axios.post('http://localhost:5000/questions', questionDetails)
    .then(res => {console.log(res.data);
     //notification
     if (res.data.result === "success") {
      toast("Survey questions updated!", {
        type: "success",
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          window.location.reload();
        }
      });
    } else {
      toast("Unable to update the Survey questions!", {
        type: "error",
        position: toast.POSITION.TOP_CENTER,
        onClose: () => {
          window.location.reload();
        }
      });
    }
    });
  }

  componentDidUpdate() {
    document.body.classList.remove("register-page");
}

  renderQuestion(question, questionIndex) {
    const handleChange = e => {
      const questions = this.state.questions
      questions[questionIndex].question_content = e.target.value
      this.setState({ questions: questions })
    };

    const addOption = () => {
      const newOption = { name: '', policy: null }
      const question = this.state.questions[questionIndex]
      question.options.push(newOption)
      this.setState({ questions: this.state.questions })
    }

    const deleteOption = optionIndex => {
      this.state.questions[questionIndex].options.splice(optionIndex, 1)
      this.setState({ questions: this.state.questions })
    }

    // console.log(question.options)

    return (
      <div>
        <Input
          type="textarea"
          value={question.question_content}
          onChange={handleChange} 
        />
        <ul style={{listStyleType: "none"}}>
          {question.options.map((option, optionIndex) => (
            <Row>
                <Col md="2">
                    <Button className="btn-round" color="danger" outline onClick={() => deleteOption(optionIndex)}>
                      <i className="nc-icon nc-basket" style={{fontSize: "18px", color: "red"}}/>
                    </Button>
                </Col>
                <Col md="10">
                    <li style={{listStyleType: "none"}}>{this.renderOption(option, optionIndex, questionIndex)}</li>
                </Col>
            </Row>
          ))}
        </ul>
        <Button className="btn-round" color="success"  onClick={addOption}>add new option</Button>
        <br></br><br></br><hr></hr>
      </div>
    );
  }

  renderOption(option, optionIndex, questionIndex) {
    const handleNameChange = e => {
      const questions = this.state.questions
      questions[questionIndex].options[optionIndex].name = e.target.value
      this.setState({ questions: questions })
    };
    const handlePolicyChange = e => {
      const questions = this.state.questions
      console.log(e.target.value + questions[questionIndex].options[optionIndex].policy)
      questions[questionIndex].options[optionIndex].policy = e.target.value
      this.setState({ questions: questions })
    };

   
    return (
      <div>
        <Row style={{marginTop:'12px'}}>
            <Col md="4">
            <Input value={option.name} onChange={handleNameChange} />
            </Col>
            <Col md="2">
            <label>Match Policy:</label>
            </Col>
            <Col md="4">
            <select value={option.policy} onChange={handlePolicyChange}>
              {this.state.policies.map(policy => (
                <>
                  <option 
                    value={policy._id} checked>
                    {policy.policy_name}
                  </option>
                </>
              ))}
            </select>
            </Col>
        </Row>
      </div>
    );
  }

  render() {
    const addQuestion = () => {
      const questions = this.state.questions
      const newQuestion = {
          question_content: '',
          options: [
              {
                  name: '',
                  policy: null,
              }
          ],
      }
      questions.push(newQuestion)
      this.setState({ questions: questions })
    }
    const deleteQuestion = (questionIndex) => {
        this.state.questions.splice(questionIndex, 1)
        this.setState({ questions: this.state.questions })
    }
    return (
    <>
      <div className="content">
        <Row>
            <Col className="ml-auto mr-auto" md="12">
              <Card className="card-upgrade" style={{transform: 'none'}}>
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Survey Questions</CardTitle>
                  <p className="card-category">
                    List of questions, it's options and match policy
                  </p>
                </CardHeader>
                <CardBody>
                    <ul style={{listStyleType: "none"}}>
                        {this.state.questions.map((question, questionIndex) => (
                            <>
                            <br></br>
                            <Button className="btn-round" color="danger"  onClick={() => deleteQuestion(questionIndex)}>delete question</Button>
                            <li style={{listStyleType: "none"}}>{this.renderQuestion(question, questionIndex)}</li>
                            </>
                        ))}
                    </ul>
                    <Button className="btn-round" color="success" onClick={addQuestion}>add question</Button>
                    <Button className="btn-round" color="success" onClick={this.onSaveClick}>Save</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
      </div>
    </>
    )
  }
}

export default Questions;
