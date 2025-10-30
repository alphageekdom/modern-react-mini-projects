import { useState, useRef, useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import Button from '../common/Button';

const Timer = () => {
  const timerRef = useRef(null);
  const startButtonRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem('time') || 0);
  });

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }

    localStorage.setItem('time', time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      // Clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem(time);

    startButtonRef.current.focus();
  };
  return (
    <div>
      <TimerDisplay time={time} />

      <Button
        onClick={toggleTimer}
        ref={startButtonRef}
        className={
          'mt-3 mr-3 cursor-pointer rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
        }
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>

      <Button
        onClick={resetTimer}
        className="mt-3 cursor-pointer rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Reset
      </Button>
    </div>
  );
};

export default Timer;
