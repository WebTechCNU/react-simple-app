import React from "react";
import './BudgetList.css';

const BudgetList = props => {

    return (
    <ul className='budget-list'>
        {
            props.budget.map((elem) => {
                return <li key={elem.id}>{elem.description}</li>
            })
        }
      </ul>
    );
}

export default BudgetList;
