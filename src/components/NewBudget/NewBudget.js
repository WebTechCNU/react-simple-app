import React, {useState} from "react";
import './NewBudget.css'

const NewBudget = props => {
    let [question, valueChanged] = useState('');
    let [answers, answersChanged] = useState(['','','','']);
    let [topic, topicChanged] = useState('');
    let [correctAnswerId, correctAnswerIdChanged] = useState(0);

    const addNewElementHandler = event =>{
        event.preventDefault();

        valueChanged('');
        answersChanged(['','','',''])
        topicChanged('')
        correctAnswerIdChanged(0);
        props.onAddNew({question : question, answers: answers, topic: topic, correctAnswerId: correctAnswerId});
    }

    const onChangeHandler = event => {
        valueChanged(event.target.value);
    }

    const onChangeAnswersHandler = (event, i) => {
        let updatedAnswers = [...answers];
        updatedAnswers[i] = event.target.value
        answersChanged(updatedAnswers);
    }

    const onChangeTopicHandler = event => {
        topicChanged(event.target.value);
    }

    const onChangeCorrectAnserIdHandler = event => {
        correctAnswerIdChanged(event.target.value);
    }

    return (
        <div>
<form onSubmit={addNewElementHandler} className="form-container">
        <textarea value={question} onChange={onChangeHandler} type='text' />
        <input value={answers[0]} onChange={(e) => onChangeAnswersHandler(e, 0)} type='text' className="form-input"></input>
        <input value={answers[1]} onChange={(e) => onChangeAnswersHandler(e, 1)} type='text' className="form-input"></input>
        <input value={answers[2]} onChange={(e) => onChangeAnswersHandler(e, 2)} type='text' className="form-input"></input>
        <input value={answers[3]} onChange={(e) => onChangeAnswersHandler(e, 3)} type='text' className="form-input"></input>
        <input value={topic} onChange={onChangeTopicHandler} type='text' className="form-input"></input>
        <input value={correctAnswerId} onChange={onChangeCorrectAnserIdHandler} type='number' className="form-input">
        </input>
        <button type='submit' className="submit-button">Add</button>
    </form>
        </div>
    )
}

export default NewBudget;