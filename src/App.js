import React from 'react';
import './App.css';
import Rectangle from "./Rectangle";

function App() {
    return (
        <div>
            <div>
                <Rectangle a={10} b={5}/>
                <Rectangle a={7} b={13}/>
                <Rectangle a={20} b={20}/>
            </div>
        </div>
    );
}

export default App;
