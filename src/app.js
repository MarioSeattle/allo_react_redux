//action is a parameter and the reducer is the function
//We will make change to the state based on the action (function)

//Function will be reducers
const cards = (state, action) => {
    switch (action.type){
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });
        //splitting the state object into individual properties
            return state.concat([newCard]);
        default:
            return state || [];
    }
};

//Redux helper function to pass reducer functions
const store = Redux.createStore(Redux.combineReducers({
    cards
}));

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