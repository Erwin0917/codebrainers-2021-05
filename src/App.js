import React from 'react';
import './App.css';
import { codeBrainersStudents, otherStudents } from './models/Students';
import Students from "./components/Students";

function App() {
    return (
        <div>
            <Students students={codeBrainersStudents} />
            <Students students={otherStudents} />
        </div>
    );
}

export default App;
