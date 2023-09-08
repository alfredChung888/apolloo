import React, { useEffect } from 'react';
import './App.css';

const App = () => {
    const endPoint = 'http://localhost:3000'

    useEffect(() => {
        fetch(`${endPoint}/load/dataJson`, {
            mode: 'no-cors'
        })
        .then(data => console.log('data', data))
        .catch(err => console.log('ERROR', err))
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/app/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
