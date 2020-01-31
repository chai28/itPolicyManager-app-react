import React, {
    Component
} from "react";
import Axios from "axios";

import {
    FormGroup,
    Input,
    InputGroup,
} from "reactstrap";

class QuestionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            policies: [],
        };
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/questions')
            .then(response => {
                console.log('response', response)
                this.setState({
                    questions: response.data
                });
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        document.body.classList.remove("register-page");
    }

    questionList() {
        const handleOnChange = (option, questionIndex) => {
            const policies = this.state.policies;
            policies[questionIndex] = option.policy;
            this.setState({ policies: policies });
            this.props.onPoliciesChange(this.state.policies);
            
        }
        return this.state.questions.map(function (question, questionIndex) {
            return ( 
                <FormGroup>
                    <label key={questionIndex}>{ question.question_content }</label>  
                    <InputGroup className = "form-group-no-border" >
                        <div className = "form-check"> 
                        {
                            question.options.map(function (option, optionIndex) {
                                // console.log("option" + option.name);
                                return ( 
                                    <>
                                    <div>
                                        <label key={questionIndex}>
                                            <Input type = "radio"
                                            name = { questionIndex }
                                            value = { option.name }
                                            className = "form-check-input"
                                            onClick = {() => handleOnChange(option, questionIndex)}
                                            /> 
                                            {option.name} 
                                        </label> 
                                    </div >
                                    </>
                                )
                            })
                        } 
                        </div> 
                    </InputGroup> 
                </FormGroup>
            )
        }
    )
}

render() {
    return( 
        <>
            <h5 > Start Survey </h5> {
            this.questionList()
        } 
        </>
    );
}

}

export default QuestionForm;