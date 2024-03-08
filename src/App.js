import './App.css';
import BudgetList from './components/BudgedList';
import NewBudget from './components/NewBudget/NewBudget';
import { useState, useEffect } from 'react';

function App() {
  const [budgetList, setBudget] =  useState([]);

  useEffect(() => {
    const getBudgets = async () => {
      const response = await fetch('http://localhost:5000/api/budgets');

      const responseData = await response.json();

      setBudget(responseData)
    }

    getBudgets();
  }, []);


  const addNewElementHandler = async (newElem) => {
    const response = await fetch('http://localhost:5000/api/budgets', {
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
    </div>
  );
}

export default App;
