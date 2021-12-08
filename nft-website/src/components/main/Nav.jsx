import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import Button from '../UI/Button.jsx';
import logo from '../../assets/main-logo.png';

const Nav = (props) => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <nav className={styles['nav']}>
      <div>
        <Link to="/" className={styles['logo']}>
          <img 
            src={logo}
            alt="Heavenlywords" 
          />
        </Link>
      </div>

      <div className={`${styles['links']} ${burgerOpen ? styles['nav-slide'] : ''}`}>
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
          href="https://testnets.opensea.io/collection/heavenlywords-collection">
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

      <div className={`${styles['btns']} ${burgerOpen ? styles['nav-slide'] : ''}`}>
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

      <div className={styles['burger']}>
        {burgerOpen ? 
        <i 
          className="fas fa-times"
          onClick={() => {
            setBurgerOpen(prev => !prev);
          }}
        /> 
        : 
        <i 
          className="fas fa-bars"
          onClick={() => {
            setBurgerOpen(prev => !prev);
          }}
        />}
      </div>
    </nav>
  );
}

export default Nav;