import React from 'react';
import './App.css';
import codeBrainersStudents from './models/Students';
import Student from "./components/Student";

function App() {
    return (
        <div>
            <div>
                {
                    codeBrainersStudents.map(
                        student => <Student student={student} />
                    )
                }
            </div>
        </div>
    );
}

export default App;
