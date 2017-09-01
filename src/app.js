//action is a parameter and the reducer is the function
//We will make change to the state based on the action (function)
const store = Redux.createStore(function (state, action) {
    //Create a new card and return the updated version of array (new state)
    switch (action.type){
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
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
store.subscribe(() => {
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