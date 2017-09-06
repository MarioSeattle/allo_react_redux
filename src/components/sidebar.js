import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';
//adding new route to show Cards
import { Link } from 'react-router';

//create functions that keep track of state
const mapStateToProps = ({ decks, addingDeck }) => ({
    decks,
    addingDeck
});

const mapDispatchToProps = dispatch => ({
    addDeck: name => dispatch(addDeck(name)),
    showAddDeck: () => dispatch(showAddDeck()),
    hideAddDeck: () => dispatch(hideAddDeck())
});


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
                    <li key={i}>
                    <Link to={`/deck/${deck.id}`}>{deck.name}</Link>
                    </li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
