import React, {useState} from "react";
import './NewBudget.css'

const NewBudget = props => {
    let [inputValue, valueChanged] = useState('');
    const addNewElementHandler = event =>{
        event.preventDefault();

        valueChanged('');
        props.onAddNew({name : inputValue, description: inputValue});
    }

    const onChangeHandler = event => {
        valueChanged(event.target.value);
    }

    return (
    <form onSubmit={addNewElementHandler}>
        <input value={inputValue} onChange={onChangeHandler} type='text' />
        <button type='submit' >Add</button>
    </form>)
}

export default NewBudget;