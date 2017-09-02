import React from 'react';
//For our first component React
const App = (props) => {

    return (<div className='app'>
        {props.children}
    </div>);
};

export default App;
