import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
//add router
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
//router reducer new property function
reducers.routing = routerReducer;

import App from './components/App';

//Redux helper function to pass reducer functions (Reducers add here)
const store = createStore(combineReducers(reducers));

//add router for history object ERROR WHEN USING browserHistory
const history = syncHistoryWithStore(browserHistory, store);

//Create function to render more html -jsx and decks action
function run () {
    let state = store.getState();
    ReactDOM.render((<Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}></Route>
        </Router>
    </Provider>), document.getElementById('root'));

}
//run the function
run();
store.subscribe(run);


