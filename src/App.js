import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const APP_ID = 'ea64e37b';
    const APP_KEY = '2999b28eb1a5b454fa702c85da45ebad';
    const exampleRequest =
        'https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free';

    return (
        <div className='App'>
            <h1> Hello React</h1>
        </div>
    );
};

export default App;
