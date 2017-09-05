import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux'
import { addDeck, showAddDeck, hideAddDeck } from './actions';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import App from './components/app';
import Sidebar from './components/sidebar';


//Redux helper function to pass reducer functions (Reducers add here)
const store = createStore(combineReducers(reducers));

//Create function to render more html -jsx and decks action
function run () {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((
            <Provider store={store}>
            <App>
        <Sidebar
            decks={ state.decks }
            addingDeck={ state.addingDeck }
            addDeck={name => store.dispatch(addDeck(name))}
            showAddDeck={() => store.dispatch(showAddDeck())}
            hideAddDeck={() => store.dispatch(hideAddDeck())}
        />
            </App>
            </Provider>), document.getElementById('root'));

}
//run the function
run();

store.subscribe(run);


