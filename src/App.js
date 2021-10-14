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

    return (
        <div>
            <pre className="rectangle">{rectangle}</pre>
            <p>Area of rectangle of width {props.a} and height {props.b} is {props.a * props.b}.</p>
        </div>
    );
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
