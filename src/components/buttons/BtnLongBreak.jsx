import React from 'react';

const BtnLongBreak = ({
  setTime,
  active,
  setActive,
  setInitial,
  setFinish,
}) => {
  const newTime = () => {
    const newTime = {
      minutes: 15,
      seconds: 0,
    };

    setTime((t) => ({ ...t, ...newTime, run: false }));

    setInitial(newTime);

    setFinish((f) => !f);

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
