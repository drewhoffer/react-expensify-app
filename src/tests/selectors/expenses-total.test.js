import expenses from '../fixtures/expenses';
import selectExpensesTotal from '../../selectors/expenses-total';

test('Should return 0 if no expenses', () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);
});

test('Should correctly add single expense', () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toBe(expenses[1].amount);
});

test('Should correctly add multiple expenses', () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(114195);
});