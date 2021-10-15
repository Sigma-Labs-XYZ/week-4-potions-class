
import './App.css';
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentSearchText: '',
      currentMatches: [],
    }
  }

  updateStudentRecord = (students) => {
    this.setState({students});
  }

  updateMatches = async (currentSearchText) => {
      const {students} = this.props;
      let filteredStudents = students.filter(student => student.name.toLowerCase().includes(currentSearchText.toLowerCase()));
      if(currentSearchText === '') {
          this.props.displayStudent([]);
          filteredStudents = [];
      }
      this.setState({currentMatches: filteredStudents})
  }

  findStudent = (e) => {
    const studentIndex = parseInt(e.target.id);
    const foundStudent = this.state.currentMatches[studentIndex];
    this.props.displayStudent([foundStudent])
  }

  createAutocompleteSuggestions = () => {
      return this.state.currentMatches.map((match,i) => {
          return (<div key={i} id={i} className="autocomplete-suggestion" onClick={this.findStudent}>
              {match.name}
          </div>)
      })
  }

  render() { 
      const {currentMatches} = this.state;
    return (
    <div className="search-wrapper">
      <label htmlFor="search" className="form-item component-title" id="search-header">Search Student</label>
      <input className='form-field' id='search' type="text" onChange={async (e) => await this.updateMatches(e.target.value)}></input>
      <div id="autocomplete-wrapper">
        {currentMatches ? this.createAutocompleteSuggestions() : ''}
        </div>
    </div>
  );
  }
}

export default Search;
