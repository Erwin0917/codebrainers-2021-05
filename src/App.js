import React from 'react';
import './App.css';

function Rectangle(props) {
    let i, j;

    let rectangle = '';

    rectangle += '+';
    for (i = 0; i < props.a; i++) {
        rectangle += '-';
    }
    rectangle += '+\n';

    for (j = 0; j < props.b; j++) {
        rectangle += '|';
        for (i = 0; i < props.a; i++) {
            rectangle += ' ';
        }
        rectangle += '|\n';
    }

    rectangle += '+';
    for (i = 0; i < props.a; i++) {
        rectangle += '-';
    }
    rectangle += '+\n';

    return <pre className="rectangle">{rectangle}</pre>;
}

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
