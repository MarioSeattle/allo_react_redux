import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers } from 'redux'
import { addDeck, showAddDeck, hideAddDeck } from './actions';
import * as reducers from './reducers';
import App from './components/app';
import Sidebar from './components/sidebar';


//Redux helper function to pass reducer functions (Reducers add here)
const store = createStore(combineReducers(reducers));

//Create function to render more html -jsx and decks action
function run () {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((<App>
        <Sidebar
            decks={ state.decks }
            addingDeck={ state.addingDeck }

        //Let's add more properties/methods that our sidebar can call (control state)
            addDeck={name => store.dispatch(addDeck(name))}
            showAddDeck={() => store.dispatch(showAddDeck())}
            hideAddDeck={() => store.dispatch(hideAddDeck())}
        />
    </App>), document.getElementById('root'));

}
//run the function
run();

store.subscribe(run);


