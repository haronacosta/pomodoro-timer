import React from 'react';

const BtnRun = ({ setTime, run }) => {
  const changeRun = () => {
    setTime((t) => ({ ...t, run: !t.run }));
  };
  return (
    <button className="btn-run" onClick={changeRun}>
      {run ? 'STOP' : 'START'}
    </button>
  );
};

export default BtnRun;
