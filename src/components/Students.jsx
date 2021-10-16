import React from "react";
import Student from "./Student";
import './Students.css';

function Students(props) {
    const students = props.students;
    const sortedStudents = students.sort(function (studentA, studentB) {
        const fullName1 = studentA.fullName;
        const fullName2 = studentB.fullName;
        if (fullName1 > fullName2) {
            return 1;
        } else if (fullName1 < fullName2) {
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
