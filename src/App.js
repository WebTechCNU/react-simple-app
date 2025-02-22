import './App.css';
import BudgetList from './components/BudgedList';
import NewBudget from './components/NewBudget/NewBudget';
import Login from './components/LoginForm'
import { useState, useEffect } from 'react';
import axios, * as others from 'axios';

function App() {
  const [budgetList, setBudget] =  useState([]);
  const [selectedOption, setSelectedOption] = useState("js-topic");

  const getBudgets = async (topic) => {
    const responseData = await axios.get(
      'https://chnu-student-interview-preparation.netlify.app/.netlify/functions/listQuestions?topic=' + topic);

    setBudget(responseData.data)
  }

  useEffect(() => {
    getBudgets(selectedOption);
  }, []);

  const handleChangeOption = (event) => {
    setSelectedOption(event.target.value);
    getBudgets(event.target.value);
  };

  const addNewElementHandler = async (newElem) => {
    axios.post(
      'https://chnu-student-interview-preparation.netlify.app/.netlify/functions/createQuestion', 
      newElem)
    .then(function (response) {
      getBudgets();
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div className="App">
      <h1>Budget planner: List of expenses</h1>
      <select id="dropdown" value={selectedOption} onChange={handleChangeOption}>
        <option value="">Select...</option>
        <option value="js-topic">js topic</option>
        <option value="test-topic">test</option>
      </select>
      <NewBudget onAddNew={addNewElementHandler} />
      <BudgetList budget={budgetList} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
