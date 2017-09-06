import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

//container component 
const mapStateToProps =  (props, { params: { deckId } }) => ({
    deckId
});

//For our first component React
const App = ({ deckId, children }) => {
    return (<div className='app'>
        <Sidebar />
        <h1> Deck {deckId} </h1>
        {children}
    </div>);
};
export default connect(mapStateToProps)(App);

