import React, { useState } from 'react';

const ClockInClockOut = ({ onClockIn, onClockOut }) => {
  const [clockedIn, setClockedIn] = useState(false);

  const handleClockIn = () => {
    setClockedIn(true);
    onClockIn(new Date());
  };

  const handleClockOut = () => {
    setClockedIn(false);
    onClockOut(new Date());
  };

  return (
    <div>
      <button onClick={handleClockIn} disabled={clockedIn}>Clock In</button>
      <button onClick={handleClockOut} disabled={!clockedIn}>Clock Out</button>
    </div>
  );
};

export default ClockInClockOut;