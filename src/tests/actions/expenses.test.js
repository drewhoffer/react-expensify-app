import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('Should setup remove expense action object', () => {
    const action = removeExpense({id: 'abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abc'
    });
});


test('Should setup edit expense action object', () => {
    const action = editExpense('abc',{
        description: 'New Description'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {
            description: 'New Description'
        }
    });
})



test('Should setup add expense action object with provided values', () => {
    
    const expenseData = {
        description: "New Description",
        note: "New Note",
        amount: 12,
        createdAt: 0
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }

    });
});



test('Should setup add expense action object with provided values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        },

    });
});