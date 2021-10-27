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
      <div className={styles['menu']}>
        {/* <Link to="/contract" className={styles['admin-link']}>
          <i className="fas fa-user-cog" />
        </Link> */}
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
              <i className="fab fa-ethereum" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

export default Nav;