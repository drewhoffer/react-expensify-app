import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';


test('Should display ExpenseSummary correctly with 0 expenses', () => {
    const wrapper = shallow(<ExpenseSummary />);
    
    expect(wrapper).toMatchSnapshot();
});


test('Should display ExpenseSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('Should display ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={235}/>);
    
    expect(wrapper).toMatchSnapshot();
});