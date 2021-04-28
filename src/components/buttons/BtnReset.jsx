import React from 'react';
import resetIcon from '../../icons/backward-solid.svg';

const BtnReset = () => {
  return (
    <button className="btn-reset">
      <img src={resetIcon} alt="" />
    </button>
  );
};

export default BtnReset;
