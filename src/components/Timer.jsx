import React, { useEffect, useState } from 'react';
import BtnLongBreak from './buttons/BtnLongBreak';
import BtnPomodoro from './buttons/BtnPomodoro';
import BtnReset from './buttons/BtnReset';
import BtnRun from './buttons/BtnRun';
import BtnShortBreak from './buttons/BtnShortBreak';
import Clock from './Clock';

export const Timer = () => {
  const initialTime = {
    minutes: 25,
    seconds: 0,
    run: false,
  };

  const [active, setActive] = useState('pomodoro');

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.run) {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            setTime({ ...time, seconds: 0, minutes: 0, run: false });
            clearInterval(timer);
          } else {
            setTime({ ...time, seconds: 59, minutes: time.minutes - 1 });
          }
        } else {
          setTime({ ...time, seconds: time.seconds - 1 });
        }
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="timer">
      <div className="options-buttons">
        <BtnPomodoro setTime={setTime} active={active} setActive={setActive} />
        <BtnLongBreak setTime={setTime} active={active} setActive={setActive} />
        <BtnShortBreak
          setTime={setTime}
          active={active}
          setActive={setActive}
        />
      </div>
      <Clock {...time} />
      <div className="btn-container">
        <BtnRun setTime={setTime} run={time.run} />
        <BtnReset />
      </div>
    </div>
  );
};
