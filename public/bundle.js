(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//action is a parameter and the reducer is the function
//We will make change to the state based on the action (function)
var store = Redux.createStore(function (state, action) {
    //Create a new card and return the updated version of array (new state)
    switch (action.type) {
        case 'ADD_CARD':
            var newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date()
            });
            //defined state.cards
            return Object.assign({}, state, {
                cards: state.cards ? state.cards.concat([newCard]) : [newCard]
            });
        default:
            return state || {};
    }
});

//Keep an eye on the store for changes
store.subscribe(function () {
    console.log(store.getState());
});

//activate store action
store.dispatch({
    type: 'ADD_CARD',
    data: {
        front: 'front',
        back: 'back'
    }
});

//Another action
store.dispatch({
    type: 'ADD_CARD',
    data: {}
});

},{}]},{},[1]);
