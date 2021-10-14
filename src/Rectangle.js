import React from "react";

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

export default Rectangle;
