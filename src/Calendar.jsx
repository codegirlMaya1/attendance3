import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = ({ events, onAddEvent, onDeleteEvent }) => {
  const [date, setDate] = useState(new Date());

  const handleAddEvent = () => {
    const event = prompt('Enter event:');
    if (event) {
      onAddEvent(date, event);
    }
  };

  return (
    <div>
      <Calendar onChange={setDate} value={date} />
      <button onClick={handleAddEvent}>Add Event</button>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.date.toLocaleDateString()}: {event.event}
            <button onClick={() => onDeleteEvent(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCalendar;