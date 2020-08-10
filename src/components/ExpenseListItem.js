
import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';

//description
//amount
//created at


const ExpenseListItem = ({history, dispatch, id, description, amount, createdAt}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
            </Link>
            <p>{amount} - {createdAt}</p>
    </div>
);




export default ExpenseListItem;