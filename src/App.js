import './App.css';
import BudgetList from './components/BudgedList';
import NewBudget from './components/NewBudget/NewBudget';
import { useState } from 'react';

function App() {
  const [budgetList, setBudget] =  useState([
    {id: 1, text: 'laptop'},
    {id: 2, text: 'phone'},
    {id: 3, text: 'paper'}
  ]);

  const addNewElementHandler = (newElem) => {
    setBudget([... budgetList, newElem]);
  }

  console.log(budgetList);

  return (
    <div className="App">
      <h1>Budget planner: List of expenses</h1>
      <NewBudget onAddNew={addNewElementHandler} />
      <BudgetList budget={budgetList} />
    </div>
  );
}

export default App;
