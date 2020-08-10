//get visible expenses
import moment from 'moment';



export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        //only if startdate is a number do we want to use it
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
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
};