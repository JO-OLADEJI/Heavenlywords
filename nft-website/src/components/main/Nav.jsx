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
          href="https://opensea.io/collection/heavenlywords">
          Opensea
        </a>
        <Link to="/gallery" className={styles['link']}>
          Gallery
        </Link>
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