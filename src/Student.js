
import './App.css';
import React from 'react';

class Student extends React.Component {
    constructor(props) {
        super()
    }

    getHouseImgURL(house) {
        return `hogwarts-img/${house.toLowerCase()}.png`
    }

    handleCheckboxChange = (e) => {
      this.props.updateLateRecord(parseInt(e.target.id), e.target.checked);
    }

  render() { 
      const {name, house, isLate, time, id} = this.props.student;
    return (
    <div className="student-record">   
        <div className={isLate ? "student-record-info-is-late" : "student-record-info"}>
            <div className="student-record-house-badge-img-container">
                <img className="student-record-house-badge" src={this.getHouseImgURL(house)} alt={`${house} logo`}/>
            </div>
            <div className="student-record-class-info">
                <h3 className="student-record-student-name">{name}</h3> 
                Entered class at <br/>{time}
            </div>
            <div className="student-record-late-checker">
                <label className="student-record-late-checker-container"> Mark as late
                    <input id={id} className="student-record-late-checker-checkbox" onChange={this.handleCheckboxChange} checked={isLate} type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                
            </div>
        </div>
    </div>
  );
  }
}

export default Student;
