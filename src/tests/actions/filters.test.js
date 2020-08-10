import { setStartDate,
     setEndDate,
     setTextFilter,
    sortByAmount,
    sortByDate } from '../../actions/filters';

    
import moment from 'moment';


test('Should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    });
});



test('Should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});


test('Should generate setTextFilter action object to default', () => {
    const action = setTextFilter();
    expect(action).toEqual( {
        type: 'SET_TEXT',
        text: ""
    });
});


test('Should generate setTextFilter action object', () => {
    const action = setTextFilter("Rent");
    expect(action).toEqual( {
        type: 'SET_TEXT',
        text: "Rent"
    });
});


test('Should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual( {
        type: 'SORT_BY_AMOUNT',
    });
});

test('Should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual( {
        type: 'SORT_BY_DATE',
    });
});