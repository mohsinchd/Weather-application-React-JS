import React, { useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date().toLocaleString());
  setTimeout(() => {
    setDate(new Date().toLocaleString());
  }, 1000);
  return (
    <div className="box">
      <h1 className="display-6 fw-bold">CALENDAR</h1>
      <h1 className="display-6">{date}</h1>
    </div>
  );
};

export default Clock;
