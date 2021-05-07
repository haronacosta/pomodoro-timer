import React from 'react';

const BtnShortBreak = ({
  setTime,
  active,
  setActive,
  setInitial,
  setFinish,
}) => {

  const newTime = () => {
    const newTime = {
      minutes: 5,
      seconds: 0,
    };
    
    setTime((t) => ({ ...t, ...newTime, run: false }));

    setInitial(newTime);

    setFinish(false);

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
