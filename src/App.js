
import './App.css';
import React from 'react';
import { hogwartsStudentRegistry } from './data';
import Register from './Register';
import StudentForm from './StudentForm';
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      students: [],
      selectedStudent: [],
    }
  }

  componentDidMount = () => {
    this.updateStudentRecord(hogwartsStudentRegistry);
  }

  updateStudentRecord = (students) => {
    const mapStudents = students.map((student, i) => ({
      ...student, id: i
    }));
    this.setState({students: mapStudents});
  }

  handleInputChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  displayStudent = (student) => {
    this.setState({selectedStudent: student})
  }

  render() { 
    const {students, selectedStudent} = this.state;
    return (
    <div className="app-wrapper">
      <div id="column-1">
        <Search students={students} displayStudent={this.displayStudent}/>
        <StudentForm updateStudents={this.updateStudentRecord} students={students}/>
      </div>

      <Register students={students} selectedStudent={selectedStudent} updateStudents={this.updateStudentRecord} />
    </div>
  );
  }
}

export default App;
