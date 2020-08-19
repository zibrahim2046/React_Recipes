import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    const APP_ID = 'ea64e37b';
    const APP_KEY = '2999b28eb1a5b454fa702c85da45ebad';
    const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    return (
        <div className='App'>
            <form className='search-form'>
                <input className='search-bar' type='text' />
                <button className='search-button' type='submit'>
                    Search
                </button>
            </form>
        </div>
    );
};

export default App;
