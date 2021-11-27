import React, { useEffect, useState } from 'react';
import styles from '../styles/Details.module.css';
import { Link } from 'react-router-dom';

const Details = (props) => {
  const [seconds, setSeconds] = useState('');
  const [minutes, setMinutes] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState('');

  const countdown = () => {
    // const mintTime = new Date('November 27, 2021 16:00:00').getTime();
    const mintTime = 1638025200000;
    const now = new Date().getTime();
    const gap = mintTime - now;

    // time constants
    const sec = 1000;
    const min = sec * 60;
    const hr = min * 60;
    const d = hr * 24;

    if (gap >= 0) {
      setDays(() => Math.floor(gap / d));
      setHours(() => Math.floor((gap % d) / hr));
      setMinutes(() => Math.floor((gap % hr) / min));
      setSeconds(() => Math.floor((gap % min) / sec));
    }
    else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setMinutes(0);
    }
  }
  
  useEffect(() => {
    setInterval(() => {
      countdown();
    }, 1000);
  }, []);

  return (
    <section className={styles['details']}>
      <h2 className={styles['heading']}>Mint a heavenlyword NFT</h2>
      <p className={styles['date']}>
        <pre>
          <i className="far fa-calendar" /> November 27th   |   <i className="far fa-clock" /> 11:00 EST
        </pre>
      </p>
      <p className={styles['price']}>
        <i className="fab fa-ethereum" /> .0777
      </p>
      <p className={styles['blink']}>Countdown to mint . . .</p>
      <div className={styles['countdown-timer']}>
        <div className={styles['days']}>
          <h1>{(days).toString().padStart(2, '0')}</h1>
          <p>Days</p>
        </div>
        <div className={styles['hours']}>
          <h1>{(hours).toString().padStart(2, '0')}</h1>
          <p>Hours</p>
        </div>
        <div className={styles['minutes']}>
          <h1>{(minutes).toString().padStart(2, '0')}</h1>
          <p>Minutes</p>
        </div>
        <div className={styles['seconds']}>
          <h1>{(seconds).toString().padStart(2, '0')}</h1>
          <p>Seconds</p>
        </div>
      </div>
        <Link to="/mint">
          <button className={styles['mint-ref']}>
            Mint a heavenlyword
            <i className="fas fa-dove" />
          </button>
        </Link>
    </section>
  );
}
 
export default Details;