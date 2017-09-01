(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//action is a parameter and the reducer is the function
//We will make change to the state based on the action (function)

//Function will be reducers
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

//Redux helper function to pass reducer functions
var store = Redux.createStore(Redux.combineReducers({
    cards: cards
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

ReactDOM.render(React.createElement(
    App,
    null,
    React.createElement(Sidebar, { decks: [{ name: 'Deck 1' }], addingDeck: true })
), document.getElementById('root'));

},{}]},{},[1]);
