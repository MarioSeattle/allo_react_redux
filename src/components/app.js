import React from 'react';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';
//container component 
const mapStateToProps =  (props, { params: { deckId } }) => ({
    deckId
});
//For our first component React
const App = ({ deckId, children }) => {
    return (<div className='app'>
        <Toolbar deckId={deckId} />
        <Sidebar />
        {children}
    </div>);
};
export default connect(mapStateToProps)(App);

