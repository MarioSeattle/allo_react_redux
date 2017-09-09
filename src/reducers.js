export const cards = (state, action) => {
    switch (action.type){
        case 'ADD_CARD':
            let newCard = Object.assign({}, action.data, {
                score: 1,
                id: +new Date
            });
            //splitting the state object into individual properties
            return state.concat([newCard]);

        //INMUTABILITY RETURNING A NEW STATE OBJECT
        case 'UPDATE_CARD':
            let cardUpdate = action.data;
            return state.map(card => (card.id !== cardUpdate.id) ?
                card :
                Object.assign({}, card, cardUpdate)
            );
        case 'DELETE_CARD':
            return state.filter(c => c.id !== action.data);

        default:
            return state || [];
    }
};

//Function (Reducer)
export const decks = (state, action) => {
    switch (action.type){
        case 'ADD_DECK':
            let newDeck = { name: action.data, id: +new Date };
            return state.concat([newDeck]);
        default:
            return state || [];
    }
};

//adding deck reducer to tell if we are showing text box
export const addingDeck = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        //if not show or hide keep state otherwise true or false
        default: return !!state;

    }
};
