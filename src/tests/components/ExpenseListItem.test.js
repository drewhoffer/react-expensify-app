import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('Should render ExpenseListItem', () => {
    const expense = expenses[1];
    const wrapper = shallow(<ExpenseListItem { ...expense} key={expense.id}/>);
    expect(wrapper).toMatchSnapshot();
});
