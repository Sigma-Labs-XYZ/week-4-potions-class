import './App.css';
import React from 'react';
const houses =  ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw', 'Sort Me!'];

class StudentForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
        house: 'Gryffindor',
        name: '',
    }
  }

  pickRandomHouse() {
      return houses[Math.ceil(Math.random() * 4) - 1];
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, house} = this.state;
    const currentHouse = house === 'Sort Me!' ? this.pickRandomHouse() : house;
    const newStudents = [{name, house: currentHouse, time: new Date().toUTCString(), isLate:false}, ...this.props.students]
    this.props.updateStudents(newStudents);
  }

  handleInputChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }

  render() { 
    return (
       <div className="form-wrapper">
       <form id="attendance-form" onSubmit={this.handleSubmit}>
         <label className='form-item' htmlFor='name'>Name</label>
         <input className='form-item form-field' onChange={this.handleInputChange} id="name" type="text"></input>
         <label  className='form-item' htmlFor='house'>House</label>
         <select className='form-item form-field' onChange={this.handleInputChange} id="house" defaultValue="Gryffindor">
            { 
            houses.map((opt, i) => <option key={`${opt}-${i}`}value={opt} id={`option-${i}`}>{opt}</option>)
            }
         </select>
         <input className="form-item submit-btn" type="submit" value="Register me!"></input>
       </form>
       </div>
  );
  }
}

export default StudentForm;
