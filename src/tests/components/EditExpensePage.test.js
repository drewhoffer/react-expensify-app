import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let editExpense,removeExpense, history, wrapper;


beforeEach(() => {
    removeExpense = jest.fn();
    editExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense= {editExpense} 
        removeExpense={removeExpense} 
        history= {history} 
        expense={expenses[1]}
    />);
});



test('Should renderEditExpensePage correctly', () => {
       expect(wrapper).toMatchSnapshot();
});


test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});



test('Should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});