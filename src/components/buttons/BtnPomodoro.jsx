import React from 'react';

const BtnPomodoro = ({ setTime, active, setActive }) => {
  const newTime = () => {
    setTime((t) => ({ ...t, minutes: 25, seconds: 0 }));
    setActive('pomodoro');
  };
  return (
    <button
      className={`btn btn-pomodoro ${active === 'pomodoro' ? 'active' : ''}`}
      onClick={newTime}>
      Pomodoro
    </button>
  );
};

export default BtnPomodoro;
