import React from 'react';
import './App.css';
import codeBrainersStudents from './models/Students';
import Student from "./components/Student";

function App() {
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        Full name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        Number of lessons
                    </th>
                </tr>
                </thead>
                <tbody>

                {
                    codeBrainersStudents.map(
                        student => <Student student={student} />
                    )
                }
                </tbody>

            </table>
        </div>
    );
}

export default App;
