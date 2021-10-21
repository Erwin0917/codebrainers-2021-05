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
                        <button onClick={() => props.incrementLessons(props.index)}>➕</button>
                        { ' ' }
                        <button onClick={() => props.decrementLessons(props.index)}>➖</button>
                    </div>

                </div>
            </td>

        </tr>);
}

export default Student;
