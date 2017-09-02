(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//action creators ADD_DECK SHOW_ADD_DECK HIDE_ADD_DECK
var addDeck = function addDeck(name) {
    return { type: 'ADD_DECK', data: name };
};
var showAddDeck = function showAddDeck() {
    return { type: 'SHOW_ADD_DECK' };
};
var hideAddDeck = function hideAddDeck() {
    return { type: 'HIDE_ADD_DECK' };
};

//Function (Reducer)
var cards = function cards(state, action) {
    switch (action.type) {
        case 'ADD_CARD':
            var newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date()
            });
            //splitting the state object into individual properties
            return state.concat([newCard]);
        default:
            return state || [];
    }
};

//Function (Reducer)
var decks = function decks(state, action) {
    switch (action.type) {
        case 'ADD_DECK':
            var newDeck = { name: action.data, id: +new Date() };
            return state.concat([newDeck]);
        default:
            return state || [];
    }
};

//adding deck reducer to tell if we are showing text box
var addingDeck = function addingDeck(state, action) {
    switch (action.type) {
        case 'SHOW_ADD_DECK':
            return true;
        case 'HIDE_ADD_DECK':
            return false;
        //if not show or hide keep state otherwise true or false
        default:
            return !!state;

    }
};

//Redux helper function to pass reducer functions (Reducers add here)
var store = Redux.createStore(Redux.combineReducers({
    cards: cards,
    decks: decks,
    addingDeck: addingDeck
}));

//For our first component React
var App = function App(props) {

    return React.createElement(
        'div',
        { className: 'app' },
        props.children
    );
};

//Lets add a sidebar
var Sidebar = React.createClass({
    displayName: 'Sidebar',
    render: function render() {
        var props = this.props;

        return React.createElement(
            'div',
            { className: 'sidebar' },
            React.createElement(
                'h2',
                null,
                'All Decks'
            ),
            React.createElement(
                'ul',
                null,
                props.decks.map(function (deck, i) {
                    return (
                        //keys are needed for this type of childrem elements for reacts to tell apart
                        React.createElement(
                            'li',
                            { key: i },
                            ' ',
                            deck.name
                        )
                    );
                })
            ),
            props.addingDeck && React.createElement('input', { ref: 'add' })
        );
    }
});

//Create function to render more html -jsx and decks action
function run() {
    var state = store.getState();
    console.log(state);
    ReactDOM.render(React.createElement(
        App,
        null,
        React.createElement(Sidebar, { decks: state.decks, addingDeck: state.addingDeck })
    ), document.getElementById('root'));
}
//run the function
run();

store.subscribe(run);

window.show = function () {
    return store.dispatch(showAddDeck());
};
window.hide = function () {
    return store.dispatch(hideAddDeck());
};
window.add = function () {
    return store.dispatch(addDeck(new Date().toString()));
};

},{}]},{},[1]);
