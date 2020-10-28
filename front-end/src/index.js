import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/style.scss';
import AppRouter from './router/AppRouter';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store} >
        <AppRouter />
    </Provider>,
    document.getElementById('root')
)