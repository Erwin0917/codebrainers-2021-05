import React from "react";
import Student from "./Student";
import './Students.css';

class Students extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            averageAge: undefined,
            sortedStudents: []
        };


    }
    componentDidMount() {
        this.setState({sortedStudents: this.props.students})
    }

    calculateAverageAge = () => {
        if (this.props.students.length === 0){
            return;
        }

        const sumAge = this.props.students.reduce((sum,student) => sum + student.age,this.props.students[0].age);
        const averageAge = sumAge / this.props.students.length;
        this.setState({averageAge: averageAge});
    }

    sortStudent = () =>{
        const students = this.props.students;
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
        this.setState({sortedStudents: sortedStudents});
    }
    render() {

        return (
            <React.Fragment>
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
                        this.state.sortedStudents.map(
                            student => <Student student={student}/>
                        )
                    }
                    </tbody>

                </table>
                <p><button onClick={this.calculateAverageAge} className="calculate-age">Calculate average age</button></p>
                <p><button onClick={this.sortStudent} className="calculate-age">Sort students</button></p>
                <div>
                    <p>Average age: {this.state.averageAge}</p>

                </div>
            </React.Fragment>
        )

    }
}


export default Students;
