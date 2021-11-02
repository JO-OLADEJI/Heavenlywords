import React from 'react';
import styles from '../styles/Header.module.css';

const Header = (props) => {
  return (
    <div className={styles['header']}>
      <h1>Ascend Now!</h1>
      <p>Generate NFT images from a descriptive text.</p>
    </div>
  );
}

export default Header;