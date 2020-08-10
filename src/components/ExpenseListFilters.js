import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';


export class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null,
    };


    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };


    onFocusChange = (calendarFocused) => {
        this.setState(()=> ({calendarFocused}) )
    };


    onSortChange = (e) => {
        if(e.target.value === "date") {
            this.props.sortByDate();
        } else if (e.target.value === "amount") {
            this.props.sortByAmount();
        }
    };


    render() {
        return (

        
            <div>
            <input 
                type="text" 
                value={this.props.filters.text} 
                onChange={this.onTextChange}
            />
            <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange={() => false}
            />
        </div>)
    }

}


//setup value for onchange select

const mapStateToProps = (state) => ({
        filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setStartDate(endDate)),

});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

