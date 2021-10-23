import React from 'react';
import StudentModel from '../models/Student';

function StudentRow(props) {

    console.log('Rendering student with name', props.student.fullName);

    if (!(props.student instanceof StudentModel)) {
        debugger;
        return null;
    }

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
                        {' '}
                        <button onClick={() => props.setLessons(props.index, false)}>➖</button>
                        {' '}
                        <button onClick={() => props.removeStudent(props.index)}>Delete</button>
                    </div>

                </div>
            </td>

        </tr>
    );
}

export default React.memo(StudentRow);
