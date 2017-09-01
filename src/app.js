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

ReactDOM.render((<App>
    <Sidebar decks={[ { name: 'Deck 1'} ]} addingDeck={true} />
</App>), document.getElementById('root'));