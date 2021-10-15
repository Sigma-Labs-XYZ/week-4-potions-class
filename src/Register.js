import './App.css';
import React from 'react';
import Student from './Student';

class Register extends React.Component {
  constructor(props) {
    super();
    this.state = {
        records: [],
    }
  }

  createRegister = () => {
    const studentsToDisplay = this.props.selectedStudent.length > 0 ? this.props.selectedStudent : this.props.students;
    return studentsToDisplay.map((student,i) => <Student key={i} student={student} updateLateRecord={this.updateLateRecord}/>);
  }

  updateLateRecord = (personId, isLate) => {
      const hasSearched = this.props.selectedStudent.length === 0;
      const updatedStudents = hasSearched ? [...this.props.selectedStudent] : [...this.props.students] ;
      const index = hasSearched ? 0 : personId;
      updatedStudents[index].isLate = isLate;

      this.props.updateStudents(updatedStudents);
  }

  render() { 
    return (
     <div id="register">
        <RegisterHeader/>
        <div className="register-table">
        {this.createRegister()}
        </div>
     </div>
  );
  }
}

class RegisterHeader extends React.Component {      
    render() {
    return (
        <div id="register-component-header">
            <span id="star-background">✷</span>
            <h2 className="component-title">Register</h2>
        </div>
    )}
}

export default Register;
