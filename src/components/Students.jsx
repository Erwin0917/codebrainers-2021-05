import React from "react";
import Student from "./Student";
import './Students.css';

function Students(props) {
    const students = props.students;

    return (
        <table className="studentsTable" cellPadding='0' cellSpacing='0'>
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
                students.map(
                    student => <Student student={student} />
                )
            }
            </tbody>

        </table>

    )
}

export default Students;
