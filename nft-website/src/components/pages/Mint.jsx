import React, { useState } from 'react';
import styles from '../styles/Mint.module.css';
import Form from '../main/Form.jsx';
import Header from '../main/Header.jsx';
import Visual from '../main/Visual.jsx';
import TxHash from '../main/TxHash.jsx';

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
        <Visual />
      </div>
      {txHash.length > 0 ? <TxHash txHash={txHash} /> : ''}
    </div>
  );
}

export default Mint;