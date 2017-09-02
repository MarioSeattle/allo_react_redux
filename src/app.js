//action creators ADD_DECK SHOW_ADD_DECK HIDE_ADD_DECK
const addDeck = name => ({ type: 'ADD_DECK', data: name });
const showAddDeck = () => ({ type: 'SHOW_ADD_DECK' });
const hideAddDeck = () => ({ type: 'HIDE_ADD_DECK' });


//Function (Reducer)
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

//Function (Reducer)
const decks = (state, action) => {
    switch (action.type){
        case 'ADD_DECK':
            let newDeck = { name: action.data, id: +new Date };
            return state.concat([newDeck]);
        default:
            return state || [];
    }
};

//adding deck reducer to tell if we are showing text box
const addingDeck = (state, action) => {
    switch (action.type) {
        case 'SHOW_ADD_DECK': return true;
        case 'HIDE_ADD_DECK': return false;
        //if not show or hide keep state otherwise true or false
        default: return !!state;

    }
};

//Redux helper function to pass reducer functions (Reducers add here)
const store = Redux.createStore(Redux.combineReducers({
    cards,
    decks,
    addingDeck
}));

//For our first component React
const App = (props) => {

    return (<div className='app'>
        {props.children}
    </div>);
};

//Lets add a sidebar
const Sidebar = React.createClass({
    render(){
        let props = this.props;

        return (<div className='sidebar'>
            <h2>All Decks</h2>
            <ul>
                {props.decks.map((deck, i) =>
                    //keys are needed for this type of childrem elements for reacts to tell apart
                    <li key={i}> {deck.name}</li>

                )}
            </ul>
            { props.addingDeck && <input ref='add' /> }
        </div>);
    }
});

//Create function to render more html -jsx and decks action
function run () {
    let state = store.getState();
    console.log(state);
    ReactDOM.render((<App>
        <Sidebar decks={ state.decks } addingDeck={ state.addingDeck } />
    </App>), document.getElementById('root'));

}
//run the function
run();

store.subscribe(run);

window.show = () => store.dispatch(showAddDeck());
window.hide = () => store.dispatch(hideAddDeck());
window.add = () => store.dispatch(addDeck( new Date().toString()));


