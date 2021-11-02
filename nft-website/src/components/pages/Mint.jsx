import React, { useState } from 'react';
import styles from '../styles/Mint.module.css';
import Form from '../main/Form.jsx';
import Header from '../main/Header.jsx';
import TxHash from '../main/TxHash.jsx';
import Footer from '../main/Footer.jsx';

const Mint = (props) => {
  const [txHash, setTxHash] = useState('');

  return (
    <div className={styles['mint']}>
      <Header />
      <div className={styles['form-body']}>
        <Form 
          setTxHash={setTxHash}
          warning={props.status}
        />
      </div>
      {txHash.length > 0 ? <TxHash txHash={txHash} /> : ''}
      <Footer />
    </div>
  );
}

export default Mint;