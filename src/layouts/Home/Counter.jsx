import React, { useEffect, useState } from 'react';

import styles from './Intro.module.css';

const ENSPIRE_DATE = '12/01/2022';

export const Counter = () => {
  const [countDownData, setCountDownData] = useState({
    days: '',
    hours: '',
    minutes: '',
    seconds: '',
  });

  useEffect(() => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const countDown = new Date(ENSPIRE_DATE).getTime();
    const clear = setInterval(() => {
      const now = new Date().getTime(),
        distance = countDown - now;

      setCountDownData(() => ({
        days: Math.max(Math.floor(distance / day), 0),
        hours: Math.max(Math.floor((distance % day) / hour), 0),
        minutes: Math.max(Math.floor((distance % hour) / minute), 0),
        seconds: Math.max(Math.floor((distance % minute) / second), 0),
      }));
    });

    return () => {
      clearInterval(clear);
    };
  }, []);

  return (
    <div className={styles.countdown}>
      <ul>
        <li>
          <span className={styles.days}>{countDownData.days}</span>days
        </li>
        <li>
          <span className={styles.hours}>{countDownData.hours}</span>Hours
        </li>
        <li>
          <span className={styles.minutes}>{countDownData.minutes}0</span>Minutes
        </li>
        <li>
          <span className={styles.seconds}>{countDownData.seconds}0</span>
          Seconds
        </li>
      </ul>
    </div>
  );
};
