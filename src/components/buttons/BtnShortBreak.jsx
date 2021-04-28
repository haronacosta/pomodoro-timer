import React from 'react';

const BtnShortBreak = ({ setTime, active, setActive }) => {
  const newTime = () => {
    setTime((t) => ({ ...t, minutes: 5, seconds: 0 }));
    setActive('short');
  };

  return (
    <button
      className={`btn btn-shortbreak ${active === 'short' ? 'active' : ''}`}
      onClick={newTime}>
      Short Break
    </button>
  );
};

export default BtnShortBreak;
