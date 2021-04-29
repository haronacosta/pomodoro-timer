import React from 'react';

const BtnPomodoro = ({ setTime, active, setActive, setInitial }) => {
  const newTime = () => {
    const newTime = {
      minutes: 25,
      seconds: 0,
    };

    setTime((t) => ({ ...t, ...newTime, run: false }));

    setInitial(newTime);

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
