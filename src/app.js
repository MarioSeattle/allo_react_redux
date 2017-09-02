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
    componentDidUpdate(){
        //if element exist Focus    
        var el = ReactDOM.findDOMNode(this.refs.add);
        if (el) el.focus();
    },
    render(){
        let props = this.props;

        return (<div className='sidebar'>
            <h2>All Decks</h2>


            <bottom onClick={ e => this.props.showAddDeck() }>Click to Add</bottom>

            <ul>
                {props.decks.map((deck, i) =>
                    //keys are needed for this type of childrem elements for reacts to tell apart
                    <li key={i}> {deck.name}</li>

                )}
            </ul>
            { props.addingDeck && <input ref='add' onKeyPress={this.createDeck} /> }
        </div>);
    },

    createDeck(evt){
        if (evt.which !== 13) return;
        //otherwise get the deck name
        var name = ReactDOM.findDOMNode(this.refs.add).value;
        this.props.addDeck(name);
        this.props.hideAddDeck();

    }
});

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


