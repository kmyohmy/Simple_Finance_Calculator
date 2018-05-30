import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

//REDUX 
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import { Provider } from 'react-redux';

const store = configureStore();

store.subscribe( () => {
const state = store.getState();
const visbleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visbleExpenses);
}

)


// store.dispatch()
store.dispatch(addExpense({description:'Gas bill' , amount: 500 }));
store.dispatch(addExpense({description:'Water bill', amount:200, createdAt: 1000}));
store.dispatch(addExpense({description:'Rent', amount:109500}));


const jsx =  (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
