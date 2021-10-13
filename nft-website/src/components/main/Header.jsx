import React from 'react';
import styles from '../styles/Header.module.css';

// assets
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import discord from '../../assets/discord.png';

const Header = (props) => {
  return (
    <div className={styles['header']}>
      <h1>Ascend Now!</h1>
      <p>Generate NFT images from a descriptive text.</p>
      <div className={styles['social-links']}>
        <a href="https://shootfish.com">
          <img src={google} alt="" />
        </a>
        <a href="https://shootfish.com">
          <img src={twitter} alt="" />
        </a>
        <a href="https://shootfish.com">
          <img src={facebook} alt="" />
        </a>
        <a href="https://shootfish.com">
          <img src={discord} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Header;