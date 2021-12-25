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
          href="https://opensea.io/collection/heavenlywords">
          Opensea
        </a>
        <a
          className={styles['ex-link']}
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/CuEPe5FcP9">
          <i className="fab fa-discord" />
        </a>
        <a
          className={styles['ex-link']}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/metacultdao?s=21">
          <i className="fab fa-twitter" />
        </a>
      </div>
      <Link to="/mint">
        <button className={styles['mint-ref']}>
          initiate and mint a HEAVENLY WORD
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