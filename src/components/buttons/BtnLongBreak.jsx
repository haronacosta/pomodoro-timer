import React from 'react';

const BtnLongBreak = ({ setTime, active, setActive }) => {
  const newTime = () => {
    setTime((t) => ({ ...t, minutes: 15, seconds: 0 }));
    setActive('long');
  };

  return (
    <button
      className={`btn btn-longbreak ${active === 'long' ? 'active' : ''}`}
      onClick={newTime}>
      Long Break
    </button>
  );
};

export default BtnLongBreak;
