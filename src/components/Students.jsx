import React from "react";
import Student from "./Student";
import './Students.css';

function Students(props) {
    const students = props.students;
    const sortedStudents = students.sort(function (studentA, studentB) {
        const age1 = studentA.age;
        const age2 = studentB.age;
        if (age1 > age2) {
            return 1;
        } else if (age1 < age2) {
            return -1;
        } else {
            return 0;
        }

    });
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
                sortedStudents.map(
                    student => <Student student={student}/>
                )
            }
            </tbody>

        </table>

    )
}

export default Students;
