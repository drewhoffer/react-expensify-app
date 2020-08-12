import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage,  } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let startEditExpense,startRemoveExpense, history, wrapper;


beforeEach(() => {
    startRemoveExpense = jest.fn();
    startEditExpense = jest.fn();
    history = { push: jest.fn()};
    wrapper = shallow(<EditExpensePage 
        startEditExpense= {startEditExpense} 
        startRemoveExpense={startRemoveExpense} 
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
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});



test('Should handle startRemoveExpense', () => {
    wrapper.find('button').prop('onClick')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id: expenses[1].id});
});


