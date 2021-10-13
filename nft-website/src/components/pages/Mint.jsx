import React, { useState } from 'react';
import styles from '../styles/Mint.module.css';
import Form from '../main/Form.jsx';
import Header from '../main/Header.jsx';
import Visual from '../main/Visual.jsx';
import TxHash from '../main/TxHash.jsx';

const Mint = (props) => {
  // form state
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [word3, setWord3] = useState('');
  const [word4, setWord4] = useState('');
  const [word5, setWord5] = useState('');
  const [word6, setWord6] = useState('');
  const [word7, setWord7] = useState('');

  const [txHash, setTxHash] = useState('');

  // functions
  const handleInputChange = (e, fn) => {
    fn(() => (e.target.value).trim());
  }

  const handleTxHashChange = (hash) => {
    setTxHash(() => hash);
  }

  const resetInputs = () => {
    setWord1('');
    setWord2('');
    setWord3('');
    setWord4('');
    setWord5('');
    setWord6('');
    setWord7('');
  }
  return (
    <div className={styles['mint']}>
      <Header />
      <div className={styles['form-body']}>
        <Form 
          words={[word1, word2, word3, word4, word5, word6, word7]}
          setWords={[setWord1, setWord2, setWord3, setWord4, setWord5, setWord6, setWord7]}
          handleInputChange={handleInputChange}
          warning={props.status}
          walletAddress={props.walletAddress}
          setTxHash={handleTxHashChange}
          resetInputs={resetInputs}
        />
        <Visual />
      </div>
      {txHash.length > 0 ? <TxHash txHash={txHash} /> : ''}
    </div>
  );
}

export default Mint;