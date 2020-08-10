import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense = (
    { 
        description = '',
         note = '',
          amount = 0,
           createdAt = 0
         } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
    type: 'SET_TEXT',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
});
//SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
});
//expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                 action.expense
            ];
        case 'REMOVE_EXPENSE': 
            return state.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE': 
            return state.map(expense => {
                if (expense.id ===  action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
            });
        
        default: 
            return state;
    }
};

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: "date"
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: "amount"
            }    
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default: 
            return state;
    }
}

//get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {

        //only if startdate is a number do we want to use it
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        //figure out if expenses description has the text variable string inside of it
        //includes
        //convert both strings to lowercase
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            //if a is true then 1 else -1
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy ==='amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}


//store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);




const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 500, createdAt: 1000,}));
const expenseTwo = store.dispatch(addExpense({description: "coffee", amount: 600, createdAt: -1000,}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters) 
    console.log(visibleExpenses);
});
// store.dispatch(setTextFilter('cof'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByDate());
 store.dispatch(sortByAmount());

// store.dispatch(setStartDate(999));
// store.dispatch(setEndDate(10000));

const demoState = {
    expenses: [{
        id: 'abasdf',
        description: 'Jan. Rent',
        note: "This was the final payment for that address",
        amount: 123400,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount", //date?
        startDate: undefined,
        endDate: undefined
    }
};




// const user = {
//     name: "Drew",
//     age: 23
// };

// console.log({
//     ...user,
//     location: "Waterloo",
//     age: 26
// });