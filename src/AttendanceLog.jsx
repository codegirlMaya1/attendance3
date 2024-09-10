import React from 'react';

const AttendanceLog = ({ log }) => {
  return (
    <div>
        <h4> <a href=" https://github.com/codegirlMaya1/attendance3.git"> <strong>Link to Github Repository </strong> </a></h4>
        <h3> Hi! Please clock in and out above...</h3>
        <h3>  Please add a new event to the calendar below:</h3>
        
      <h2>Attendance Log</h2>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>
            {entry.type}: {entry.time.toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendanceLog;