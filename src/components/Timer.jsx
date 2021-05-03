import React, { useEffect, useState } from 'react';
import BtnLongBreak from './buttons/BtnLongBreak';
import BtnPomodoro from './buttons/BtnPomodoro';
import BtnReset from './buttons/BtnReset';
import BtnRun from './buttons/BtnRun';
import BtnShortBreak from './buttons/BtnShortBreak';
import Clock from './Clock';

export const Timer = () => {
  const initialTime = {
    minutes: 0,
    seconds: 10,
    run: false,
  };

  const [active, setActive] = useState('pomodoro');

  const [initial, setInitial] = useState({
    minutes: 25,
    seconds: 0,
  });

  const [time, setTime] = useState(initialTime);

  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time.run) {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            setTime({ ...time, seconds: 0, minutes: 0, run: false });
            setFinish(true);
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
        <BtnPomodoro
          setTime={setTime}
          active={active}
          setActive={setActive}
          setInitial={setInitial}
        />
        <BtnLongBreak
          setTime={setTime}
          active={active}
          setActive={setActive}
          setInitial={setInitial}
        />
        <BtnShortBreak
          setTime={setTime}
          active={active}
          setActive={setActive}
          setInitial={setInitial}
        />
      </div>

      <Clock {...time} finish={finish} />

      <div className="btn-container">
        <BtnRun setTime={setTime} run={time.run} />
        <BtnReset initial={initial} setTime={setTime} />
      </div>
    </div>
  );
};
