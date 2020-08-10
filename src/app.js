import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();
store.dispatch(addExpense({
    description: "water bill",
    amount: 4500
}));

store.dispatch(addExpense({
    description: "gas bill",
    createdAt: 1000
}));
store.dispatch(addExpense({
    description: "rent",
    amount: 109400
}));




const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));