import expensesReducer from '../../reducers/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: "273as"
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses);
});


test('Should add an expense', () => {
    const newExpense = {
        id: "4",
        description: "Parking ticket",
        note: "",
        amount: 12300
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([...expenses, newExpense ]);
});


test('Should edit an expense', () => {
    const description = "New editted description";

    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
        
    };

   const state = expensesReducer(expenses, action);
   expect(state[1].description).toBe("New editted description");

});

test('Should not edit an expense if expense not found', () => {
    const description = "New editted description";

    const action = {
        type: 'EDIT_EXPENSE',
        id: "-120398",
        updates: {
            description
        }
        
    };

   const state = expensesReducer(expenses, action);
   expect(state).toEqual(expenses);
});