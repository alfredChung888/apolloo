import React, { useEffect, useState } from 'react';
import './App.css';
import { jsonDataGet } from './lib/elecUtils';

const App = () => {
    const [clientData, setClientData] = useState(undefined)

    jsonDataGet()
        .then(result => {
            if (result !== false) {
                // setClientData(result.data)
                console.log(result.data)
            } else {
                // setClientData(undefined)
                console.log(result)
            }
            // console.log(clientData)
        })

    useEffect(() => {}, [])

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
