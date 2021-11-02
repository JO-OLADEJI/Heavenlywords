import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import Button from '../UI/Button.jsx';
import logo from '../../assets/main-logo.png';

const Nav = (props) => {
  return (
    <div className={styles['nav']}>
      <div>
        <Link to="/" className={styles['logo']}>
          <img 
            src={logo}
            alt="Heavenlywords" 
          />
        </Link>
      </div>

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

      <div className={styles['btns']}>
        { props.asyncOperation ? <i className={`fas fa-sync-alt ${styles['spinner']}`} /> : '' }
        <Button
          className={styles['connect-btn']}
          onClick={(e) => props.onConnectWallet(e)}>
          {props.walletAddress.length > 0 ? (
            <p>{"Connected: " +
            String(props.walletAddress).substring(0, 6) +
            "..." +
            String(props.walletAddress).substring(38)}
            </p>
          ) : (
            <>
              <p>Connect Wallet</p>
              <i className="fas fa-wallet" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Nav;