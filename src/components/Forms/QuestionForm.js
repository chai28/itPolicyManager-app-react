import React,{Component}from "react";
import Axios from "axios";

import {
    FormGroup, 
    Input,
    InputGroup,
  } from "reactstrap";

// reactstrap components
//import { Row, Container } from "reactstrap";


class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {questions: []};
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/questions')
            .then(response => {
                this.setState({ questions: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    questionList() {
        return this.state.questions.map(function(question, i){
            return (
                <FormGroup>
                    <label>{question.question_content}</label> 
                    <InputGroup className="form-group-no-border">
                    <div className="form-check">
                    {
                        question.options.map(function(options, i){
                            return(
                                <div> 
                                <label>
                                <Input
                                    type="radio"
                                    name="option1"
                                    value={options}
                                    checked={false}
                                    className="form-check-input"
                                    />
                                {options}
                                </label>
                                </div>

                            )
                        })
                    }
                    </div>
                    </InputGroup>
                </FormGroup>
            )
        })
    }

    render(){
        return(
        <>
            <h5>Start Survey</h5>
            { this.questionList() }
        </>
        );
    }

}

export default QuestionForm;