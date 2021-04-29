import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

const BtnReset = ({ setTime, initial }) => {
  const handleTime = () => {
    setTime((t) => ({ ...t, ...initial, run: false }));
  };

  return (
    <button className="btn-reset" onClick={handleTime}>
      <FontAwesomeIcon icon={faRedoAlt} />
    </button>
  );
};

export default BtnReset;
