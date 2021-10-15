
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
        <div className={isLate ? "student-info-is-late" : "student-info"}>
            <div className="house-badge-img-container">
                <img className="house-badges" src={this.getHouseImgURL(house)} alt={`${house} logo`}/>
            </div>
            <div className="student-class-info">
                <h3 className="student-name">{name}</h3> 
                Entered class at <br/>{time}
            </div>
            <div className="late-checker">
                <label className="late-checker-container"> Mark as late
                    <input id={id} className="late-checker-checkbox" onChange={this.handleCheckboxChange} checked={isLate} type="checkbox"/>
                    <span className="checkmark"></span>
                </label>
                
            </div>
        </div>
    </div>
  );
  }
}

export default Student;
