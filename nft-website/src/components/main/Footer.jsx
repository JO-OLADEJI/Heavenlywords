import React from 'react';
import styles from '../styles/Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className={styles['footer']}>
      <div className={styles['links']}>
        <Link to="/" className={styles['link']}>
          Home
        </Link>
        <Link to="/mint" className={styles['link']}>
          Mint
        </Link>
        <a
          className={styles['ex-link']}
          target="_blank"
          rel="noreferrer"
          href="https://testnets.opensea.io/collection/heavenlywords-v3">
          Opensea
        </a>
        <a
          className={styles['ex-link']}
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/ZtZK4FCn">
          <i className="fab fa-discord" />
        </a>
        <a
          className={styles['ex-link']}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/GRITCULT/status/1440111086162911232?s=19">
          <i className="fab fa-twitter" />
        </a>
      </div>
      <Link to="/mint">
        <button className={styles['mint-ref']}>
          Mint a heavenlyword
          <i className="fas fa-dove" />
        </button>
      </Link>
      <p className={styles['copyright']}>
        &copy;2021 Heavenlywords - all right reserved.
      </p>
    </div>
  );
}
 
export default Footer;