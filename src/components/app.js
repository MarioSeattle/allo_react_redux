import React from 'react';
import Sidebar from './Sidebar';

//For our first component React
const App = ({ children }) => {
    return (<div className='app'>
        <Sidebar />
        {children}
    </div>);
};
export default App;
