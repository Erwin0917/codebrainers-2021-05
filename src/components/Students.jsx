import React from "react";
import StudentRow from "./StudentRow";
import Student from "../models/Student";
import './Students.css';

class Students extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '18',
            averageAge: undefined,
            lessonCount: '0',
            sortedStudents: props.students,
            sortDirections: this.getResetSortDirections(),
            fullName: 'test value',
        };
    }

    componentDidMount() {
        // this.setState({sortedStudents: this.props.students})
    }

    getResetSortDirections() {
        const sortDirectionKeys = Object.keys(new Student());
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
        const student = this.state.sortedStudents[index].clone();
        if (isIncrease) {
            console.log('lessonCount', student.lessonCount, typeof student.lessonCount);
            student.lessonCount = student.lessonCount + 1;
        } else {
            student.setLessonCount(student.lessonCount - 1);
            console.log(student.lessonCount)
        }
        const sortedStudents = [...this.state.sortedStudents];
        sortedStudents[index] = student;

        this.setState({sortedStudents});

    }

    removeStudent = (index) => {
        const students = [...this.state.sortedStudents];
        students.splice(index, 1);
        this.setState({sortedStudents: students});
    }

    onFullNameChange = (event) => {
        const fullName = event.currentTarget.value;
        this.setState({fullName});
    }
    addStudent = () => {

        const sortedStudents = [...this.state.sortedStudents];
        const student = new Student();
        const fullName = this.state.fullName.trim();
        if (fullName === '') {
            return;
        }
        student.fullName = fullName;
        student.age = this.state.age;
        student.setLessonCount(this.state.lessonCount.trim());
        // const age = this.state.age.trim();

        sortedStudents.push(student);
        this.setState({sortedStudents});
    }

    isAddStudentButtonDisabled = () => {
        const student = new Student(
            this.state.fullName.trim(),
            this.state.age.trim(),
            this.state.lessonCount.trim()
        );

        if (student.fullName === ''){
            return true;
        }

        return !student.isAgeValid() || !student.isLessonCountValid();
    }

    onAgeChange = (event) => {
        const age = event.currentTarget.value;
        this.setState({age});
    }

    onLessonCountChange = (event) => {
        const lessonCount = event.currentTarget.value;
        this.setState({lessonCount});
    }
    isAgeValid = () => {
        const student = new Student(
            '',
            this.state.age.trim()
        );
        return student.isAgeValid();
    }
    isLessonCountValid = () => {
        const student = new Student(
            '',
            0,
            this.state.lessonCount.trim()
        );
        return student.isLessonCountValid();
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
                        (student, index) => <StudentRow
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
        const {sortedStudents} = this.state;

        console.log(`Rendering Students ${sortedStudents.length} `, sortedStudents);

        const hasAnyStudents = sortedStudents.length > 0;
        return (
            <React.Fragment>
                {
                    hasAnyStudents && this.studentsTable()
                }
                <div>
                    <button onClick={this.addStudent} className='button'
                            disabled={this.isAddStudentButtonDisabled()} >Add
                    </button>

                    <input onChange={this.onFullNameChange} type="text" className="input-text"
                           value={this.state.fullName}/>
                    <input onChange={this.onAgeChange} type="text" className={this.isAgeValid() ? "input-text" : "input-text input-text-error"} value={this.state.age}/>
                    <input onChange={this.onLessonCountChange} type="text" className={this.isLessonCountValid() ? "input-text" : "input-text input-text-error"}
                           value={this.state.lessonCount}/>
                </div>
                <p>
                    <button onClick={this.calculateAverageAge} className="button">Calculate average age</button>
                </p>
                <div>
                    <p>Average age: {this.state.averageAge}</p>
                </div>
            </React.Fragment>
        )

    }
}


export default Students;
