import React, { useState } from 'react';
import ClockInClockOut from './ClockInClockOut';
import AttendanceLog from './AttendanceLog';
import MyCalendar from './Calendar';
import RequestTimeOff from './RequestTimeOff';
import './App.css';

const App = () => {
  const [log, setLog] = useState([]);
  const [events, setEvents] = useState([]);

  const handleClockIn = (time) => {
    setLog([...log, { type: 'Clock In', time }]);
  };

  const handleClockOut = (time) => {
    setLog([...log, { type: 'Clock Out', time }]);
  };

  const handleAddEvent = (date, event) => {
    setEvents([...events, { date, event }]);
  };

  const handleDeleteEvent = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const handleRequestTimeOff = (reason) => {
    alert(`Time off requested: ${reason}`);
  };

  return (
    <div className="App">
      <ClockInClockOut onClockIn={handleClockIn} onClockOut={handleClockOut} />
      <AttendanceLog log={log} />
      <MyCalendar events={events} onAddEvent={handleAddEvent} onDeleteEvent={handleDeleteEvent} />
      <RequestTimeOff onRequest={handleRequestTimeOff} />
    </div>
  );
};

export default App;