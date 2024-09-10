import React, { useState } from 'react';

const RequestTimeOff = ({ onRequest }) => {
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    onRequest(reason);
    setReason('');
  };

  return (
    <div>
        <h3> Please enter the reason for your time off request:</h3>
      <h2>Request Time Off</h2>
      <input
        type="text"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason for time off"
      />
      <button onClick={handleSubmit}>Request</button>
    </div>
  );
};

export default RequestTimeOff;