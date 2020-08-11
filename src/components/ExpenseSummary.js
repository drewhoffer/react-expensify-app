import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


 export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
     return (
        <div>
        {
            expensesCount === 0 ? <h1></h1> :
             <h1>
                Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
            </h1>
        }
            
        
        </div>
     );
};

const mapStateToProps = (state) => {
    const filteredExpenses = (selectExpenses(state.expenses, state.filters));
    return {
        expensesCount: filteredExpenses.length,
        expensesTotal: expensesTotal(filteredExpenses)
    };
};


export default connect(mapStateToProps)(ExpenseSummary);
