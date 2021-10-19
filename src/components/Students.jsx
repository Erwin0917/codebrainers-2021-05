import React from "react";
import Student from "./Student";
import './Students.css';

class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            averageAge: undefined,
            sortedStudents: [],
            sortDirectionName: undefined,
            sortDirectionAge: undefined,
            sortDirectionLessons: undefined
        };
    }

    componentDidMount() {
        this.setState({sortedStudents: this.props.students})
    }

    calculateAverageAge = () => {
        if (this.props.students.length === 0) {
            return;
        }

        const sumAge = this.props.students.reduce((sum, student) => sum + student.age, this.props.students[0].age);
        const averageAge = sumAge / this.props.students.length;
        this.setState({averageAge: averageAge});
    }

    sortStudentByName = () => {
        let direction = undefined;
        if (this.state.sortDirectionName === undefined) {
            direction = 'Asc';
        } else if (this.state.sortDirectionName === 'Asc') {
            direction = 'Desc';
        } else {
            direction = 'Asc';
        }

        console.log(`direction: ${direction}, state.sortDirectionName: ${this.state.sortDirectionName}`);

        const students = this.props.students;
        const sortedStudents = students.sort(function (studentA, studentB) {
            const fullName1 = studentA.fullName;
            const fullName2 = studentB.fullName;
            if (fullName1 > fullName2) {
                return direction === 'Asc' ? 1 : -1;
            } else if (fullName1 < fullName2) {
                return direction === 'Asc' ? -1 : 1;
            } else {
                return 0;
            }

        });
        this.setState({sortedStudents: sortedStudents, sortDirectionName: direction});
    }

    sortStudentByAge = () => {
        let direction = undefined;
        if (this.state.sortDirectionAge === undefined) {
            direction = 'Asc';
        } else if (this.state.sortDirectionAge === 'Asc') {
            direction = 'Desc';
        } else {
            direction = 'Asc';
        }

        console.log(`direction: ${direction}, state.sortDirectionAge: ${this.state.sortDirectionAge}`);

        const students = this.props.students;
        const sortedStudents = students.sort(function (studentA, studentB) {
            const fullName1 = studentA.age;
            const fullName2 = studentB.age;
            if (fullName1 > fullName2) {
                return direction === 'Asc' ? 1 : -1;
            } else if (fullName1 < fullName2) {
                return direction === 'Asc' ? -1 : 1;
            } else {
                return 0;
            }

        });
        this.setState({sortedStudents: sortedStudents, sortDirectionAge: direction});

    }

    sortStudentByLessons = () => {
        let direction = undefined;
        if (this.state.sortDirectionLessons === undefined) {
            direction = 'Asc';
        } else if (this.state.sortDirectionLessons === 'Asc') {
            direction = 'Desc';
        } else {
            direction = 'Asc';
        }

        console.log(`direction: ${direction}, state.sortDirectionLessons: ${this.state.sortDirectionLessons}`);

        const students = this.props.students;
        const sortedStudents = students.sort(function (studentA, studentB) {
            const fullName1 = studentA.lessonCount;
            const fullName2 = studentB.lessonCount;
            if (fullName1 > fullName2) {
                return direction === 'Asc' ? 1 : -1;
            } else if (fullName1 < fullName2) {
                return direction === 'Asc' ? -1 : 1;
            } else {
                return 0;
            }

        });
        this.setState({sortedStudents: sortedStudents, sortDirectionLessons: direction});

    }

    render() {

        return (
            <React.Fragment>
                <table className="studentsTable" cellPadding='0' cellSpacing='0'>
                    <thead>
                    <tr>
                        <th onClick={this.sortStudentByName} className="Interactive">
                            Full name
                        </th>
                        <th onClick={this.sortStudentByAge} className="Interactive">
                            Age
                        </th>
                        <th onClick={this.sortStudentByLessons} className="Interactive">
                            Number of lessons
                        </th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        this.state.sortedStudents.map(
                            (student, index) => <Student student={student} key={index}/>
                        )
                    }
                    </tbody>

                </table>
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
