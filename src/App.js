import './App.css';
import BudgetList from './components/BudgedList';
import NewBudget from './components/NewBudget/NewBudget';
import Login from './components/LoginForm'
import { useState, useEffect } from 'react';

function App() {
  const [budgetList, setBudget] =  useState([]);

  useEffect(() => {
    const getBudgets = async () => {
      const response = await fetch('https://chnu-student-interview-preparation.netlify.app/.netlify/functions/listQuestions');

      const responseData = await response.json();

      setBudget(responseData)
    }

    getBudgets();
  }, []);


  const addNewElementHandler = async (newElem) => {
    const response = await fetch('https://chnu-student-interview-preparation.netlify.app/.netlify/functions/createQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newElem)
    });

    let responseData = await response.json();

    setBudget(responseData);
  }


  return (
    <div className="App">
      <h1>Budget planner: List of expenses</h1>
      <NewBudget onAddNew={addNewElementHandler} />
      <BudgetList budget={budgetList} />
      {/* <Login /> */}
    </div>
  );
}

export default App;
