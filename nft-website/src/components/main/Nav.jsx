import React from 'react';
import styles from '../styles/Nav.module.css';
import Button from '../UI/Button.jsx';

const Nav = (props) => {
  return (
    <div className={styles['nav']}>
      <div className={styles['logo']}>
        <h1>Heavenlywords.</h1>
      </div>
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
            <i className="fab fa-ethereum" />
          </>
        )}
      </Button>
    </div>
  );
}

export default Nav;