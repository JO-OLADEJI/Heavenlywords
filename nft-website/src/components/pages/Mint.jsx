import React, { useState } from 'react';
import styles from '../styles/Mint.module.css';
import Form from '../main/Form.jsx';
import Header from '../main/Header.jsx';
import Success from '../main/Success.jsx';

const Mint = (props) => {
  const [latestTokenId, setLatestTokenId] = useState('');

  return (
    <div className={styles['mint']}>
      <Header />
      <div className={styles['form-body']}>
        <Form 
          setTokenId={setLatestTokenId}
          warning={props.status}
          walletAddress={props.walletAddress}
        />
      </div>
      <p>{latestTokenId.length > 0 ? <Success tokenId={latestTokenId} setTokenId={setLatestTokenId} /> : ''}</p>
    </div>
  );
}

export default Mint;