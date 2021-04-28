import React, { useEffect, useState } from 'react';

const Clock = ({ minutes, seconds }) => {
  const [clock, setClock] = useState({
    minutes: '00',
    seconds: '00',
  });

  const formatTime = (minutes, seconds) => {
    const newMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const newSeconds = seconds < 10 ? `0${seconds}` : seconds;

    setClock({
      minutes: newMinutes,
      seconds: newSeconds,
    });
  };

  useEffect(() => {
    formatTime(minutes, seconds);
  }, [minutes, seconds]);

  return (
    <div className="clock">
      {clock.minutes}:{clock.seconds}
    </div>
  );
};

export default Clock;
