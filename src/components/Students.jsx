import React from "react";
import Student from "./Student";
import StudentModel from "../models/Student";
import './Students.css';

class Students extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            averageAge: undefined,
            sortedStudents: [],
            sortDirections: this.getResetSortDirections(),
        };
    }

    componentDidMount() {
        this.setState({sortedStudents: this.props.students})
    }

    getResetSortDirections() {
        const sortDirectionKeys = Object.keys(new StudentModel());
        const sortDirections = {};
        sortDirectionKeys.forEach((key) => sortDirections[key] = undefined);
        return sortDirections;
    }

    calculateAverageAge = () => {
        if (this.props.students.length === 0) {
            return;
        }

        const sumAge = this.props.students.reduce((sum, student) => sum + student.age, this.props.students[0].age);
        const averageAge = sumAge / this.props.students.length;
        this.setState({averageAge: averageAge});
    }

    sortStudent = (fieldName) => {
        let direction = undefined;

        const currentSortDirection = this.state.sortDirections[fieldName];

        if (currentSortDirection === 'Desc' || currentSortDirection === undefined) {
            direction = 'Asc';
        } else {
            direction = 'Desc';
        }

        const students = this.props.students;
        const sortedStudents = students.sort(function (studentA, studentB) {
            const fullName1 = studentA[fieldName];
            const fullName2 = studentB[fieldName];
            if (fullName1 > fullName2) {
                return direction === 'Asc' ? 1 : -1;
            } else if (fullName1 < fullName2) {
                return direction === 'Asc' ? -1 : 1;
            } else {
                return 0;
            }
        });

        const sortDirections = this.getResetSortDirections();
        sortDirections[fieldName] = direction;

        this.setState({sortedStudents, sortDirections});
    }

    setLessons = (index, isIncrease) => {
        const student = this.state.sortedStudents[index];
        if (isIncrease) {
            student.lessonCount++;
        } else {
            student.setLessonCount(student.lessonCount - 1);
            console.log(student.lessonCount)
        }
        const sortedStudents = [...this.state.sortedStudents];
        this.setState({sortedStudents});
    }
    removeStudent = (index) => {
        const students = [...this.state.sortedStudents];
        students.splice(index, 1);
        this.setState({sortedStudents: students});
    }

    studentsTable = () => {
        return (
            <table className="studentsTable" cellPadding='0' cellSpacing='0'>
            <thead>
            <tr>
                <th onClick={() => this.sortStudent('fullName')} className="Interactive">
                    Full name
                </th>
                <th onClick={() => this.sortStudent('age')} className="Interactive">
                    Age
                </th>
                <th onClick={() => this.sortStudent('lessonCount')} className="Interactive">
                    Number of lessons
                </th>
            </tr>
            </thead>
            <tbody>

            {
                this.state.sortedStudents.map(
                    (student, index) => <Student
                        student={student}
                        key={index}
                        index={index}
                        setLessons={this.setLessons}
                        removeStudent={this.removeStudent}
                    />
                )
            }
            </tbody>

        </table>
        )
    }

    render() {

        const hasAnyStudents = this.state.sortedStudents.length > 0;

        return (
            <React.Fragment>
                {
                    hasAnyStudents && this.studentsTable()
                }
                <p>
                    <button onClick={this.calculateAverageAge} className="calculate-age">Calculate average age</button>
                </p>
                <div>
                    <p>Average age: {this.state.averageAge}</p>

                </div>
            </React.Fragment>
        )

    }
}


export default Students;
