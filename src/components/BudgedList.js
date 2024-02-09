import React from "react";
import './BudgetList.css';

const BudgetList = props => {
    console.log(props);

    return (
    <ul className='budget-list'>
        {
            props.budget.map((elem) => {
                return <li key={elem.id}>{elem.text}</li>
            })
        }
      </ul>
    );
}

export default BudgetList;
