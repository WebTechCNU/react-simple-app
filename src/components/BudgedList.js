import React from "react";
import './BudgetList.css';

const BudgetList = props => {

    return (
    <ul className='budget-list'>
        {
            props.budget.map((elem) => {
                return <li className="item-row" key={elem.id}>
                    <p className="item-name">{elem.question}</p>
                    <p className="item-description">{elem.answers}</p>
                    </li>
            })
        }
      </ul>
    );
}

export default BudgetList;
