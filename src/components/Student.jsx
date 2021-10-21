import React from 'react';

function Student(props) {
    return (
        <tr>

            <td>
                {props.student.fullName}
            </td>
            <td>
                {props.student.age}
            </td>
            <td>
                <div className="lessonCount">
                    <div>
                        {props.student.lessonCount}

                    </div>
                    <div>
                        <button onClick={() => props.setLessons(props.index, true)}>➕</button>
                        { ' ' }
                        <button onClick={() => props.setLessons(props.index, false)}>➖</button>
                        { ' ' }
                        <button onClick={() => props.removeStudent(props.index)}>Delete</button>
                    </div>

                </div>
            </td>

        </tr>);
}

export default Student;
